import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { logoutGoogle } from '../firebase.js';
import { sendTelegram } from '../telegram.js';

const AppContext = createContext(null);
const LS = (k, fb) => {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch { return fb; }
};

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(() => LS('langup-theme', 'light'));
  const [user, setUser] = useState(() => LS('langup-user', null));
  const [savedWords, setSavedWords] = useState(() => LS('langup-saved', []));
  const [xp, setXp] = useState(() => LS('langup-xp', 0));
  const [results, setResults] = useState(() => LS('langup-results', []));
  const [doneLessons, setDoneLessons] = useState(() => LS('langup-done', []));
  const [level, setLevel] = useState(() => LS('langup-level', 'Beginner'));
  const [learnLang, setLearnLang] = useState(() => LS('langup-learnLang', 'ko'));
  const [uiLang, setUiLang] = useState(() => LS('langup-uiLang', 'uz'));
  const [purchases, setPurchases] = useState(() => LS('langup-purchases', []));

  // Tashriflarni hisoblash (statistika uchun)
  useEffect(() => {
    try {
      const n = parseInt(localStorage.getItem('langup-visits') || '0', 10) + 1;
      localStorage.setItem('langup-visits', String(n));
      const log = JSON.parse(localStorage.getItem('langup-visit-log') || '[]');
      log.push(new Date().toISOString());
      localStorage.setItem('langup-visit-log', JSON.stringify(log.slice(-200)));
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('langup-theme', JSON.stringify(theme));
  }, [theme]);
  useEffect(() => localStorage.setItem('langup-user', JSON.stringify(user)), [user]);
  useEffect(() => localStorage.setItem('langup-saved', JSON.stringify(savedWords)), [savedWords]);
  useEffect(() => localStorage.setItem('langup-xp', JSON.stringify(xp)), [xp]);
  useEffect(() => localStorage.setItem('langup-results', JSON.stringify(results)), [results]);
  useEffect(() => localStorage.setItem('langup-done', JSON.stringify(doneLessons)), [doneLessons]);
  useEffect(() => localStorage.setItem('langup-level', JSON.stringify(level)), [level]);
  useEffect(() => localStorage.setItem('langup-learnLang', JSON.stringify(learnLang)), [learnLang]);
  useEffect(() => localStorage.setItem('langup-uiLang', JSON.stringify(uiLang)), [uiLang]);
  useEffect(() => localStorage.setItem('langup-purchases', JSON.stringify(purchases)), [purchases]);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  const toggleSaveWord = (word) => {
    setSavedWords(s => s.some(w => w.en === word.en) ? s.filter(w => w.en !== word.en) : [...s, word]);
  };

  const addXp = (n) => setXp(x => x + n);
  const addResult = (r) => { setResults(rs => [{ date: new Date().toISOString(), ...r }, ...rs].slice(0, 30)); addXp(r.score * 10); };
  const completeLesson = (id) => {
    setDoneLessons(d => d.includes(id) ? d : [...d, id]);
    addXp(20);
  };

  // ── To'lovlar ──
  const addPurchase = (p) => {
    const rec = { date: new Date().toISOString(), buyer: user?.email || 'guest', ...p };
    setPurchases(ps => [rec, ...ps]);
    addXp(100);
    sendTelegram(`🧾 <b>Yangi sotuv!</b>\n📦 ${rec.title}\n💰 ${Number(rec.price || 0).toLocaleString('uz-UZ')} so'm\n👤 ${rec.buyer}\n💳 ${rec.method || ''} ••${rec.last4 || ''}`);
  };
  const premiumActive = purchases.some(p =>
    p.itemId?.startsWith('premium-') && Date.now() < new Date(p.date).getTime() + (p.months || 1) * 30 * 24 * 3600 * 1000
  );
  const hasAccess = (course) => {
    if (course.price === 0) return true;
    if (premiumActive) return true;
    return purchases.some(p => p.itemId === 'course-' + course.id);
  };

  const logout = () => {
    if (user) sendTelegram(`🚪 <b>Chiqdi (logout)</b>\n📛 ${user.name || ''}\n✉️ ${user.email || ''}`);
    setUser(null); logoutGoogle();
  };

  const value = useMemo(() => ({
    theme, toggleTheme, user, setUser, logout,
    savedWords, toggleSaveWord,
    xp, addXp, results, addResult, doneLessons, completeLesson,
    level, setLevel, learnLang, setLearnLang, uiLang, setUiLang, purchases, addPurchase, premiumActive, hasAccess,
  }), [theme, user, savedWords, xp, results, doneLessons, level, purchases, premiumActive]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
