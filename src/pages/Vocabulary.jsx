import { useMemo, useState } from 'react'
import { vocabulary } from '../data/content.js'
import { useApp } from '../context/AppContext.jsx'

const speak = (t, lang) => {
  try { const u = new SpeechSynthesisUtterance(t); u.lang = lang === 'ko' ? 'ko-KR' : 'en-US'; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch {}
}

export default function Vocabulary() {
  const { savedWords, toggleSaveWord, level, addXp, learnLang } = useApp()
  const [q, setQ] = useState('')
  const [filter, setFilter] = useState('All')
  const [trLang, setTrLang] = useState('both')
  const list = useMemo(() => vocabulary.filter(w =>
    w.lang === learnLang &&
    (filter === 'All' || w.level === filter || (filter === 'My level' && w.level === level)) &&
    (w.word.toLowerCase().includes(q.toLowerCase()) || w.uz.toLowerCase().includes(q.toLowerCase()))
  ), [q, filter, level, learnLang])
  return (
    <div>
      <h1>{learnLang === 'ko' ? '🇰🇷 Korean Vocabulary' : '🇬🇧 English Vocabulary'}</h1>
      <p className="muted">{learnLang === 'ko' ? 'Koreyscha so‘zlar, tarjima va talaffuz.' : 'English words, translation and pronunciation.'}</p>
      <div className="row">
        <input className="input" style={{ maxWidth: 300 }} placeholder={learnLang === 'ko' ? 'Qidirish... (사랑 / sevgi)' : 'Search... (love / sevgi)'} value={q} onChange={e => setQ(e.target.value)} />
        {['All', 'My level', 'Beginner', 'Intermediate', 'Advanced'].map(f => (
          <button key={f} className={filter === f ? 'btn small' : 'btn small ghost'} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className="row" style={{ marginTop: 8 }}>
        <span className="muted">{learnLang === 'ko' ? 'Tarjima tili:' : 'Translation language:'}</span>
        {[['uz', "🇺🇿 O'zbek"], ['ru', '🇷🇺 Rus'], ['both', learnLang === 'ko' ? '🇺🇿+🇷🇺 Ikkalasi' : '🇺🇿+🇷🇺 Both']].map(([v, label]) => (
          <button key={v} className={trLang === v ? 'btn small' : 'btn small ghost'} onClick={() => setTrLang(v)}>{label}</button>
        ))}
      </div>
      <div className="grid c3" style={{ marginTop: 16 }}>
        {list.map(w => {
          const saved = savedWords.some(s => s.en === w.word)
          return (
            <div className="card" key={w.word}>
              <div className="row"><b style={{ fontSize: 20 }}>{w.word}</b><span className="badge">{w.level}</span><span className="spacer" />
                <button className="icon-btn" onClick={() => toggleSaveWord(w)}>{saved ? '⭐' : '☆'}</button></div>
              <div className="muted">{w.pron} • {w.cat}</div>
              <div style={{ fontSize: 18, margin: '8px 0' }}>
                {(trLang === 'uz' || trLang === 'both') && <div>🇺🇿 {w.uz}</div>}
                {(trLang === 'ru' || trLang === 'both') && <div>🇷🇺 {w.ru}</div>}
              </div>
              <div className="muted"><i>“{w.ex}”</i></div>
              <div className="row" style={{ marginTop: 10 }}>
                <button className="btn small" onClick={() => { speak(w.word, learnLang); addXp(1); }}>🔊 Pronounce</button>
                <button className="btn small ghost" onClick={() => speak(w.ex, learnLang)}>🔈 Example</button>
              </div>
            </div>
          )
        })}
      </div>
      {list.length === 0 && <p className="muted">{learnLang === 'ko' ? 'Topilmadi.' : 'Nothing found.'}</p>}
    </div>
  )
}
