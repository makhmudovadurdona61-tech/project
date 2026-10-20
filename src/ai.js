// ─── RM Korean — AI Tutor ─────────────────────────────────────
// 1) Kalitsiz DEMO rejim: o'rnatilgan mini-o'qituvchi javob beradi.
// 2) To'liq AI uchun: aistudio.google.com → Get API Key (bepul) →
//    kalitni AI sahifasiga kiriting. Model: gemini-2.0-flash.
import { vocabulary, grammar } from './data/content.js';

export function demoReply(text) {
  const t = text.toLowerCase();
  const word = vocabulary.find(w => t.includes(w.en.toLowerCase()));
  if (word) return `📖 "${word.en}" ${word.pron}\n🇺🇿 ${word.uz}\n🇷🇺 ${word.ru}\n💬 Example: ${word.ex}`;
  const g = grammar.find(x => t.replace(/\s/g, '').includes(x.id.replace(/-/g, '')) || t.includes(x.title.toLowerCase()));
  if (g) return `📘 ${g.title}\n${g.rule}\nFormula: ${g.formula}\n🇺🇿 ${g.uz}\n🇷🇺 ${g.ru}\nExample: ${g.examples[0]}`;
  if (/salom|hello|hi\b|안녕/.test(t)) return 'Salom! 👋 Men AI Tutor man. Menga koreyscha soʻz yozing (tarjimasini aytaman) yoki mavzu soʻrang: "past tense", "particles", "topik"...';
  if (/topik/.test(t)) return '🎯 TOPIK uchun: Courses → TOPIK Preparation kursini oching, ichida Reading, Listening, Writing, Speaking mashqlari bor. Qaysi modulni mashq qilamiz?';
  if (/test/.test(t)) return '📝 Tests sahifasida 6 ta test bor. Har safar savollar aralashib chiqadi — qayta-qayta topshirib mashq qiling!';
  if (/rahmat|thank|고마/.test(t)) return 'Arzimaydi! 😊 Yana savol boʻlsa yozing. Omad!';
  return 'Tushundim! 🤖 Aniqroq yozing: koreyscha soʻz (masalan "사랑"), grammatika mavzusi (masalan "past") yoki "topik" deb yozing. Toʻliq AI javoblari uchun yuqoriga Gemini kalitini kiriting (bepul).';
}

export async function chatWithAI(history, apiKey) {
  const last = history[history.length - 1]?.text || '';
  if (!apiKey) {
    await new Promise(r => setTimeout(r, 600)); // yozayotgandek pauza
    return demoReply(last);
  }
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: 'You are a friendly Korean tutor for Uzbek and Russian speakers. Explain simply, give Uzbek and Russian translations for new words, correct mistakes kindly.' }] },
        contents: history.map(m => ({ role: m.me ? 'user' : 'model', parts: [{ text: m.text }] })),
      }),
    }
  );
  if (!res.ok) throw new Error('AI xatosi (' + res.status + '). Kalitni tekshiring.');
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'AI javob bermadi.';
}
