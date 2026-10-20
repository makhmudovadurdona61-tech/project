import { useState } from 'react'
import { chatWithAI } from '../ai.js'
import { useApp } from '../context/AppContext.jsx'

const QUICK = ['Past tense nima?', '사랑', 'TOPIK ga qanday tayyorlanaman?', 'Test topshirmoqchiman']

export default function AI() {
  const { addXp } = useApp()
  const [msgs, setMsgs] = useState([{ me: false, text: 'Salom! 👋 Men AI Tutor man. Koreyscha soʻz, grammatika yoki TOPIK haqida soʻrang!' }])
  const [inp, setInp] = useState('')
  const [busy, setBusy] = useState(false)
  const [key, setKey] = useState(() => localStorage.getItem('langup-gemini-key') || '')
  const [showKey, setShowKey] = useState(false)

  const send = async (text) => {
    const t = (text ?? inp).trim()
    if (!t || busy) return
    const h = [...msgs, { me: true, text: t }]
    setMsgs(h); setInp(''); setBusy(true)
    try {
      const reply = await chatWithAI(h, key.trim())
      setMsgs([...h, { me: false, text: reply }])
      addXp(2)
    } catch (e) {
      setMsgs([...h, { me: false, text: '❌ ' + e.message }])
    } finally {
      setBusy(false)
    }
  }

  const saveKey = () => { localStorage.setItem('langup-gemini-key', key.trim()); alert('Kalit saqlandi ✅'); }

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      <h1>🤖 AI Tutor</h1>
      <p className="muted">{key.trim() ? '🟢 To‘liq AI ulangan (Gemini)' : '🟡 Demo rejim — so‘z tarjimasi va grammatika tushuntiradi'} • <button className="btn small ghost" onClick={() => setShowKey(s => !s)}>🔑 AI kalit</button></p>
      {showKey && (
        <div className="card" style={{ marginBottom: 12 }}>
          <p className="muted" style={{ fontSize: 13 }}>Bepul kalit: <b>aistudio.google.com</b> → Get API Key → shu yerga kiriting:</p>
          <div className="row">
            <input className="input" placeholder="AIza..." value={key} onChange={e => setKey(e.target.value)} />
            <button className="btn small" onClick={saveKey}>Saqlash</button>
          </div>
        </div>
      )}
      <div className="card" style={{ minHeight: 300, maxHeight: 440, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {msgs.map((m, i) => (
          <div key={i} style={{
            alignSelf: m.me ? 'flex-end' : 'flex-start', maxWidth: '85%',
            background: m.me ? 'var(--primary)' : 'var(--bg)', color: m.me ? '#fff' : 'var(--text)',
            padding: '10px 14px', borderRadius: 14, whiteSpace: 'pre-line', fontSize: 15,
          }}>{m.text}</div>
        ))}
        {busy && <div className="muted">✍️ AI yozmoqda...</div>}
      </div>
      <div className="row" style={{ marginTop: 8 }}>
        {QUICK.map(q => <button key={q} className="btn small ghost" onClick={() => send(q)}>{q}</button>)}
      </div>
      <form className="row" style={{ marginTop: 8 }} onSubmit={e => { e.preventDefault(); send(); }}>
        <input className="input" style={{ flex: 1 }} placeholder="Savolingizni yozing..." value={inp} onChange={e => setInp(e.target.value)} />
        <button className="btn" disabled={busy}>➤</button>
      </form>
    </div>
  )
}
