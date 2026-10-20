import { useState } from 'react'
import { vocabulary, grammar, courses } from '../data/content.js'
import { fmt } from '../payments.js'

const read = (k, fb) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch { return fb; } }

export default function Admin() {
  const [accounts] = useState(() => read('langup-accounts', []));
  const [purchases] = useState(() => read('langup-purchases', []));
  const [visits] = useState(() => parseInt(localStorage.getItem('langup-visits') || '0', 10));
  const [settings, setSettings] = useState(() => read('langup-settings', { card: '' }));
  const [saved, setSaved] = useState(false);

  const revenue = purchases.reduce((s, p) => s + (p.price || 0), 0);

  const saveSettings = () => {
    localStorage.setItem('langup-settings', JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h1>🛠 Admin panel</h1>
      <p className="muted">Foydalanuvchilar, tashriflar, sotuvlar va to‘lov sozlamalari.</p>

      <div className="grid c3">
        <div className="card"><span className="muted">👥 Ro‘yxatdan o‘tganlar</span><div className="stat-num">{accounts.length}</div></div>
        <div className="card"><span className="muted">👁 Jami tashriflar</span><div className="stat-num">{visits}</div></div>
        <div className="card"><span className="muted">💰 Jami daromad ({purchases.length} sotuv)</span><div className="stat-num">{fmt(revenue)}</div></div>
      </div>

      <div className="grid c2" style={{ marginTop: 16 }}>
        <div className="card">
          <h3>💳 To‘lov sozlamalari</h3>
          <div className="grid">
            <label className="muted">Sizning kartangiz
              <input className="input" placeholder="8600 0000 0000 0000" value={settings.card} onChange={e => setSettings({ ...settings, card: e.target.value })} />
            </label>
            <button className="btn small" onClick={saveSettings}>{saved ? '✅ Saqlandi!' : 'Saqlash'}</button>
          </div>
          <p className="muted" style={{ fontSize: 13 }}>Xaridor kurs sotib olganda to‘lov oynasida shu kartani ko‘radi va pul o‘tkazadi.</p>
        </div>
        <div className="card">
          <h3>📦 Kontent</h3>
          <table className="tbl"><tbody>
            <tr><td>Vocabulary</td><td><b>{vocabulary.length}</b> so‘z</td></tr>
            <tr><td>Grammar</td><td><b>{grammar.length}</b> dars</td></tr>
            <tr><td>Courses</td><td><b>{courses.length}</b> kurs</td></tr>
          </tbody></table>
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h3>👥 Foydalanuvchilar ({accounts.length})</h3>
        {accounts.length === 0 ? <p className="muted">Hali ro‘yxatdan o‘tganlar yo‘q.</p> :
          <table className="tbl"><thead><tr><th>Ism</th><th>Email</th></tr></thead>
            <tbody>{accounts.map((u, i) => <tr key={i}><td>{u.name}</td><td>{u.email}</td></tr>)}</tbody></table>}
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h3>🧾 Sotuvlar ({purchases.length})</h3>
        {purchases.length === 0 ? <p className="muted">Hali sotuv yo‘q.</p> :
          <table className="tbl"><thead><tr><th>Mahsulot</th><th>Narx</th><th>Xaridor</th><th>Usul</th><th>Sana</th></tr></thead>
            <tbody>{purchases.map((p, i) => (
              <tr key={i}><td>{p.title}</td><td><b>{fmt(p.price)}</b></td><td>{p.buyer}</td><td>{p.method} ••{p.last4}</td><td>{new Date(p.date).toLocaleDateString()}</td></tr>
            ))}</tbody></table>}
      </div>
    </div>
  );
}
