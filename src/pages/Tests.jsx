import { useState } from 'react'
import { quizzes } from '../data/content.js'
import { useApp } from '../context/AppContext.jsx'

export default function Tests() {
  const { addResult } = useApp()
  const { learnLang } = useApp()
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(null)

  const list = quizzes.filter(qz => qz.lang === learnLang && (filter === 'All' || qz.level === filter))

  const start = (qz) => { setActive(qz); setAnswers({}); setSubmitted(null); }

  const submit = (quiz) => {
    const answered = quiz.questions.filter((_, i) => answers[quiz.id + i] !== undefined).length
    if (answered < quiz.questions.length && !window.confirm(learnLang === 'ko' ? `Hammasiga javob bermadingiz (${answered}/${quiz.questions.length}). Barchasini yakunlaymi?` : `You haven't answered all questions (${answered}/${quiz.questions.length}). Finish anyway?`)) return
    let s = 0
    quiz.questions.forEach((qq, i) => { if (answers[quiz.id + i] === qq.a) s++ })
    setSubmitted({ total: quiz.questions.length, correct: s })
    addResult({ test: quiz.title, score: s, total: quiz.questions.length })
  }

  if (!active) return (
    <div>
      <h1>📝 Tests</h1>
      <p className="muted">{learnLang === 'ko' ? 'Tilni tanlang va testni boshlang.' : 'Choose language and start a test.'}</p>
      <div className="row">{['All', 'Beginner', 'Intermediate', 'Advanced'].map(f => (
        <button key={f} className={filter === f ? 'btn small' : 'btn small ghost'} onClick={() => setFilter(f)}>{f}</button>
      ))}</div>
      <div className="grid c3" style={{ marginTop: 16 }}>
        {list.map(qz => (
          <div className="card" key={qz.id}>
            <h3>{qz.title}</h3>
            <span className="badge">{qz.level}</span>
            <p className="muted">{qz.questions.length} questions</p>
            <button className="btn" onClick={() => start(qz)}>{learnLang === 'ko' ? 'Testni boshlash' : 'Start test'}</button>
          </div>
        ))}
      </div>
    </div>
  )

  const wrongNums = active.questions
    .map((qq, i) => (answers[active.id + i] === qq.a ? null : i + 1))
    .filter(Boolean)

  return (
    <div>
      <button className="btn small ghost" onClick={() => setActive(null)}>← {learnLang === 'ko' ? 'Barcha testlar' : 'All tests'}</button>
      <h1>{active.title}</h1>
      {!submitted && (
        <>
          {active.questions.map((qq, i) => (
            <div className="card" key={i} style={{ marginBottom: 12 }}>
              <b>{i + 1}. {qq.q}</b>
              <div className="grid c2" style={{ marginTop: 10 }}>
                {qq.opts.map((o, j) => (
                  <button key={j}
                    className={answers[active.id + i] === j ? 'btn small' : 'btn small ghost'}
                    onClick={() => setAnswers(a => ({ ...a, [active.id + i]: j }))}>{o}</button>
                ))}
              </div>
            </div>
          ))}
          <button className="btn" onClick={() => submit(active)}>{learnLang === 'ko' ? 'Yuborish' : 'Submit'}</button>
        </>
      )}
      {submitted && (
        <>
          <div className="card" style={{ marginBottom: 14 }}>
            <h2>Result: {submitted.correct}/{submitted.total} {submitted.correct === submitted.total ? '🎉 Excellent!' : submitted.correct >= Math.ceil(submitted.total * 0.6) ? '👍 Good!' : '📚 Keep practicing!'}</h2>
            <p>✅ {learnLang === 'ko' ? 'To‘g‘ri' : 'Correct'}: <b style={{ color: 'var(--success)' }}>{submitted.correct} ta</b> &nbsp; ❌ {learnLang === 'ko' ? 'Noto‘g‘ri' : 'Wrong'}: <b style={{ color: '#dc2626' }}>{submitted.total - submitted.correct} ta</b></p>
            {wrongNums.length > 0 && <p className="muted">{learnLang === 'ko' ? 'Xato savollar:' : 'Wrong questions:'} № {wrongNums.join(', ')}</p>}
            <div className="row">
              <button className="btn small" onClick={() => start(active)}>{learnLang === 'ko' ? '🔄 Qayta ishlash' : '🔄 Retry'}</button>
              <button className="btn small ghost" onClick={() => setActive(null)}>← {learnLang === 'ko' ? 'Boshqa testlar' : 'Other tests'}</button>
            </div>
          </div>
          {active.questions.map((qq, i) => {
            const mine = answers[active.id + i]
            const ok = mine === qq.a
            return (
              <div className="card" key={i} style={{ marginBottom: 12, borderColor: ok ? '#16a34a' : '#dc2626' }}>
                <b>{ok ? '✅' : '❌'} {i + 1}. {qq.q}</b>
                <div className="grid c2" style={{ marginTop: 10 }}>
                  {qq.opts.map((o, j) => {
                    let cls = 'btn small ghost'
                    if (submitted) {
                      if (j === qq.a) cls += ' opt-correct'
                      else if (j === mine) cls += ' opt-wrong'
                      return <button key={j} className={cls} disabled>{j === qq.a ? '✅ ' : j === mine ? '❌ ' : ''}{o}</button>
                    }
                    return <button key={j} className={answers[active.id + i] === j ? 'btn small' : 'btn small ghost'} onClick={() => setAnswers(a => ({ ...a, [active.id + i]: j }))}>{o}</button>
                  })}
                </div>
                {mine === undefined
                  ? <p className="muted">{learnLang === 'ko' ? 'Javob bermagansiz. To‘g‘ri:' : 'You did not answer. Correct:'} <b>{qq.opts[qq.a]}</b></p>
                  : !ok && <p className="muted">{learnLang === 'ko' ? 'Siz:' : 'You:'} <b>{qq.opts[mine]}</b> → {learnLang === 'ko' ? 'To‘g‘ri:' : 'Correct:'} <b>{qq.opts[qq.a]}</b></p>}
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}
