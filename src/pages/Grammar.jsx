import { useState } from 'react'
import { grammar } from '../data/content.js'
import { useApp } from '../context/AppContext.jsx'

export default function Grammar() {
  const { completeLesson, doneLessons, level, learnLang } = useApp()
  const [open, setOpen] = useState('hangeul')
  const [filter, setFilter] = useState('All')
  const list = grammar.filter(g =>
    g.lang === learnLang && (filter === 'All' || g.level === filter)
  )
  return (
    <div>
      <h1>{learnLang === 'ko' ? '🇰🇷 Korean Grammar' : '🇬🇧 English Grammar'}</h1>
      <p className="muted">{learnLang === 'ko' ? 'Qoidalar, formulalar va misollar.' : 'Rules, formulas and examples.'}</p>
      <div className="row">{['All', 'Beginner', 'Intermediate', 'Advanced'].map(f => (
        <button key={f} className={filter === f ? 'btn small' : 'btn small ghost'} onClick={() => setFilter(f)}>{f}</button>
      ))}</div>
      <div className="grid" style={{ marginTop: 14 }}>
        {list.map(g => (
          <div className="card" key={g.id}>
            <div className="row" onClick={() => setOpen(open === g.id ? '' : g.id)} style={{ cursor: 'pointer' }}>
              <h3 style={{ margin: 0 }}>{g.title}</h3><span className="badge">{g.level}</span><span className="spacer" />
              {doneLessons.includes(g.id) && <span className="badge">✅ Done (+20 XP)</span>}
              <span>{open === g.id ? '▲' : '▼'}</span>
            </div>
            {open === g.id && (
              <div>
                <p><b>Rule:</b> {g.rule}</p>
                <p><b>Formula:</b> <code>{g.formula}</code></p>
                <ul>{g.examples.map((e, i) => <li key={i}>{e}</li>)}</ul>
                <button className="btn small" onClick={() => completeLesson(g.id)}>{learnLang === 'ko' ? 'Dars qilingan deb belgilash' : 'Mark as learned'}</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
