import { useState } from 'react'
import { Link } from 'react-router-dom'
import { topikPractice } from '../data/content.js'
import { useApp } from '../context/AppContext.jsx'

export default function TOPIK() {
  const { completeLesson, doneLessons, addResult } = useApp()
  const [tab, setTab] = useState('reading')
  const [ans, setAns] = useState({})
  const [checked, setChecked] = useState(false)

  const quiz = (id, items, tag) => {
    const score = items.filter((qq, i) => ans[tag + i] === qq.a).length
    return (
      <div>
        {items.map((qq, i) => (
          <div className="card" key={i} style={{ marginBottom: 10, borderColor: checked ? (ans[tag + i] === qq.a ? '#16a34a' : '#dc2626') : undefined }}>
            <b>{checked ? (ans[tag + i] === qq.a ? '✅' : '❌') : ''} {i + 1}. {qq.q}</b>
            <div className="grid c2" style={{ marginTop: 8 }}>
              {qq.opts.map((o, j) => {
                let cls = 'btn small ghost'
                if (checked) {
                  if (j === qq.a) cls += ' opt-correct'
                  else if (j === ans[tag + i]) cls += ' opt-wrong'
                  return <button key={j} className={cls} disabled>{o}</button>
                }
                return <button key={j} className={ans[tag + i] === j ? 'btn small' : 'btn small ghost'} onClick={() => setAns(a => ({ ...a, [tag + i]: j }))}>{o}</button>
              })}
            </div>
          </div>
        ))}
        {!checked
          ? <button className="btn" onClick={() => { setChecked(true); addResult({ test: 'TOPIK ' + id, score, total: items.length }); if (score === items.length) completeLesson('topik-' + tag); }}>Tekshirish</button>
          : <div className="card"><h3>Natija: {score}/{items.length}</h3><button className="btn small ghost" onClick={() => { setChecked(false); setAns({}); }}>🔄 Qayta</button></div>}
      </div>
    )
  }

  return (
    <div>
      <Link className="btn small ghost" to="/courses">← Courses</Link>
      <h1>🎯 TOPIK Practice</h1>
      <p className="muted">Real imtihon formatidagi mashqlar: Reading, Listening, Writing, Speaking.</p>
      <div className="row">
        {[['reading', '📖 Reading'], ['listening', '🎧 Listening'], ['writing', '✍️ Writing'], ['speaking', '🎤 Speaking']].map(([v, l]) => (
          <button key={v} className={tab === v ? 'btn small' : 'btn small ghost'} onClick={() => { setTab(v); setChecked(false); setAns({}); }}>{l} {doneLessons.includes('topik-' + v) && '✅'}</button>
        ))}
      </div>
      <div style={{ marginTop: 14 }}>
        {tab === 'reading' && (
          <div>
            <div className="card" style={{ marginBottom: 12 }}><h3>Passage: Hangeul</h3><p style={{ lineHeight: 1.7 }}>{topikPractice.reading.passage}</p></div>
            {quiz('Reading', topikPractice.reading.questions, 'r')}
          </div>
        )}
        {tab === 'listening' && (
          <div>
            <div className="card" style={{ marginBottom: 12 }}><h3>Audio script</h3><p style={{ lineHeight: 1.7 }}><i>“{topikPractice.listening.script}”</i></p>
              <button className="btn small" onClick={() => { try { const u = new SpeechSynthesisUtterance(topikPractice.listening.script); u.lang = 'ko-KR'; u.rate = 0.9; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch {} }}>▶ Eshitish</button></div>
            {quiz('Listening', topikPractice.listening.questions, 'l')}
          </div>
        )}
        {tab === 'writing' && (
          <div className="grid">
            <div className="card"><h3>Task 1</h3><p>{topikPractice.writing.task1}</p><p className="muted" style={{ fontSize: 13 }}><b>Namuna:</b> {topikPractice.writing.sample1}</p></div>
            <div className="card"><h3>Task 2</h3><p>{topikPractice.writing.task2}</p><p className="muted" style={{ fontSize: 13 }}><b>Namuna:</b> {topikPractice.writing.sample2}</p></div>
            <button className="btn small" onClick={() => completeLesson('topik-writing')}>✅ Mashq qildim</button>
          </div>
        )}
        {tab === 'speaking' && (
          <div className="grid">
            <div className="card"><h3>Part 1</h3><ul>{topikPractice.speaking.part1.map((p, i) => <li key={i}>{p}</li>)}</ul></div>
            <div className="card"><h3>Part 2</h3><p>{topikPractice.speaking.part2}</p></div>
            <div className="card"><h3>Part 3</h3><ul>{topikPractice.speaking.part3.map((p, i) => <li key={i}>{p}</li>)}</ul></div>
            <button className="btn small" onClick={() => completeLesson('topik-speaking')}>✅ Mashq qildim</button>
          </div>
        )}
      </div>
    </div>
  )
}
