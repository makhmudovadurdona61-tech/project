import { useState } from 'react'
import { readings, LEVELS } from '../data/content.js'
import { useApp } from '../context/AppContext.jsx'

export default function Reading() {
  const { completeLesson, doneLessons, level, learnLang } = useApp()
  const [tab, setTab] = useState('read')
  const [filter, setFilter] = useState('My level')
  const [showUz, setShowUz] = useState({})
  const [showRu, setShowRu] = useState({})
  const [words, setWords] = useState('')
  const [order, setOrder] = useState(null)
  const lvl = (l) => filter === 'All' || l === filter || (filter === 'My level' && l === level)
  const base = (tab === 'read' ? readings : writings).filter(r => r.lang === learnLang && lvl(r.level))
  const list = order ? order.filter(r => r.lang === learnLang && lvl(r.level)) : base
  const shuffle = () => setOrder([...(tab === 'read' ? readings : writings)].sort(() => Math.random() - 0.5))
  const wc = words.trim() ? words.trim().split(/\s+/).length : 0
  const L = learnLang
  return (
    <div>
      <h1>📄 Reading & ✍️ Writing</h1>
      <div className="row">
        <button className={tab === 'read' ? 'btn small' : 'btn small ghost'} onClick={() => { setTab('read'); setOrder(null); }}>📄 Reading</button>
        <button className={tab === 'write' ? 'btn small' : 'btn small ghost'} onClick={() => { setTab('write'); setOrder(null); }}>✍️ Writing</button>
        <span className="spacer" />
        <button className="btn small ghost" onClick={shuffle}>{L === 'ko' ? '🔀 Yangi variant' : '🔀 Shuffle'}</button>
      </div>
      <div className="row" style={{ marginTop: 8 }}>
        <span className="muted">Daraja: {level}</span>
        {['All', 'My level', ...LEVELS].map(f => (
          <button key={f} className={filter === f ? 'btn small' : 'btn small ghost'} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      {tab === 'read' && (
        <div className="grid" style={{ marginTop: 14 }}>
          {list.map(r => (
            <div className="card" key={r.id}>
              <div className="row"><h3 style={{ margin: 0 }}>{r.title}</h3><span className="badge">{r.level}</span><span className="spacer" />
                {doneLessons.includes('read-' + r.id) && <span className="badge">✅ Done</span>}</div>
              <p style={{ fontSize: 17, lineHeight: 1.7 }}>{r.text}</p>
              {showUz[r.id] && <p style={{ background: 'var(--bg)', padding: 12, borderRadius: 10 }}>🇺🇿 {r.uz}</p>}
              {showRu[r.id] && <p style={{ background: 'var(--bg)', padding: 12, borderRadius: 10 }}>🇷🇺 {r.ru}</p>}
              <div className="row">
                <button className="btn small ghost" onClick={() => setShowUz(s => ({ ...s, [r.id]: !s[r.id] }))}>{showUz[r.id] ? '🇺🇿 Yashirish' : '🇺🇿 Tarjima'}</button>
                <button className="btn small ghost" onClick={() => setShowRu(s => ({ ...s, [r.id]: !s[r.id] }))}>{showRu[r.id] ? '🇷🇺 Скрыть' : '🇷🇺 Перевод'}</button>
                <button className="btn small" onClick={() => completeLesson('read-' + r.id)}>{L === 'ko' ? 'Dars o‘qildi' : 'Mark as read'}</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {tab === 'write' && (
        <div className="grid" style={{ marginTop: 14 }}>
          {list.map(w => (
            <div className="card" key={w.id}>
              <div className="row"><h3 style={{ margin: 0 }}>{w.title}</h3><span className="badge">{w.level}</span><span className="spacer" />
                {doneLessons.includes('write-' + w.id) && <span className="badge">✅ Done</span>}</div>
              <p><b>{L === 'ko' ? 'Topshiriq:' : 'Task:'}</b> {w.prompt}</p>
              <textarea className="input" rows={5} placeholder={L === 'ko' ? 'Javobingizni yozing...' : 'Type your answer...'} value={words} onChange={e => setWords(e.target.value)} />
              <div className="row" style={{ marginTop: 8 }}>
                <span className="muted">{L === 'ko' ? 'So‘zlar:' : 'Words:'} {wc}</span><span className="spacer" />
                <button className="btn small ghost" onClick={() => alert(L === 'ko' ? 'Namuna javob:\n\n' + w.sample : 'Sample answer:\n\n' + w.sample)}>{L === 'ko' ? '📝 Namuna' : '📝 Sample'}</button>
                <button className="btn small" onClick={() => { if (wc >= 5) { completeLesson('write-' + w.id); setWords(''); } else alert(L === 'ko' ? 'Kamida 5 ta so‘z yozing!' : 'Write at least 5 words!') }}>{L === 'ko' ? 'Topshirish' : 'Submit'}</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
