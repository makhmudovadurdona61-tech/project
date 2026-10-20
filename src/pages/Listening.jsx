import { listenings, LEVELS } from '../data/content.js'
import { useApp } from '../context/AppContext.jsx'

const speak = (t, lang) => { try { const u = new SpeechSynthesisUtterance(t); u.lang = lang === 'ko' ? 'ko-KR' : 'en-US'; u.rate = 0.9; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch {} }

export default function Listening() {
  const { completeLesson, doneLessons, level, learnLang } = useApp()
  const [filter, setFilter] = useState('My level')
  const [order, setOrder] = useState(null)
  const lvl = (l) => filter === 'All' || l === filter || (filter === 'My level' && l === level)
  const base = listenings.filter(l => l.lang === learnLang && lvl(l.level))
  const list = order ? order.filter(l => l.lang === learnLang && lvl(l.level)) : base
  const shuffle = () => setOrder([...listenings].sort(() => Math.random() - 0.5))
  return (
    <div>
      <h1>🎧 Listening</h1>
      <p className="muted">{learnLang === 'ko' ? `Darajangiz: ${level} • ${listenings.filter(l => l.lang === learnLang).length} ta mashq` : `Level: ${level} • ${listenings.filter(l => l.lang === learnLang).length} exercises`}</p>
      <div className="row">
        {['All', 'My level', ...LEVELS].map(f => (
          <button key={f} className={filter === f ? 'btn small' : 'btn small ghost'} onClick={() => setFilter(f)}>{f}</button>
        ))}
        <button className="btn small ghost" onClick={shuffle}>{learnLang === 'ko' ? '🔀 Aralashtirish' : '🔀 Shuffle'}</button>
      </div>
      <div className="grid" style={{ marginTop: 14 }}>
        {list.map(l => (
          <div className="card" key={l.id}>
            <div className="row"><h3 style={{ margin: 0 }}>{l.title}</h3><span className="badge">{l.level}</span><span className="spacer" />
              {doneLessons.includes('listen-' + l.id) && <span className="badge">✅ Done</span>}</div>
            <p><b>{learnLang === 'ko' ? 'Script:' : 'Script:'}</b> <i>“{l.script}”</i></p>
            <p><b>{learnLang === 'ko' ? 'Task:' : 'Task:'}</b> {l.task}</p>
            <div className="row">
              <button className="btn small" onClick={() => speak(l.script, learnLang)}>▶ Play audio</button>
              <button className="btn small ghost" onClick={() => { try { speechSynthesis.cancel() } catch {} }}>⏹ Stop</button>
              <button className="btn small ghost" onClick={() => completeLesson('listen-' + l.id)}>{learnLang === 'ko' ? 'Dars qilingan' : 'Mark done'}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
