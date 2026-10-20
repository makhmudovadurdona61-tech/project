import { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'

const prompts = [
  'Introduce yourself in Korean (자기소개).',
  'Describe your family in Korean.',
  'Talk about your daily routine in Korean.',
  'Describe your favorite K-drama or K-pop group.',
  'Talk about your goals for this year in Korean.',
]

export default function Speaking() {
  const { addXp } = useApp()
  const [text, setText] = useState('')
  const [listening, setListening] = useState(false)
  const [prompt, setPrompt] = useState(() => prompts[Math.floor(Math.random() * prompts.length)])
  const newPrompt = () => setPrompt(prompts[Math.floor(Math.random() * prompts.length)])

  const startMic = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) { alert('Your browser does not support SpeechRecognition. Try Chrome.'); return; }
    const rec = new SR(); rec.lang = 'ko-KR'
    setListening(true)
    rec.onresult = (e) => { setText(e.results[0][0].transcript); setListening(false); addXp(10); }
    rec.onerror = () => setListening(false)
    rec.onend = () => setListening(false)
    rec.start()
  }

  const speakBack = (t) => { try { const u = new SpeechSynthesisUtterance(t); u.lang = 'ko-KR'; speechSynthesis.speak(u); } catch {} }

  return (
    <div>
      <h1>🎤 Speaking</h1>
      <p className="muted">Practice pronunciation with your microphone (Chrome recommended) or shadowing technique.</p>
      <div className="card">
        <h3>Today's prompt: “{prompt}”</h3>
        <div className="row">
          <button className="btn small ghost" onClick={newPrompt}>🎲 Yangi topshiriq</button>
        </div>
        <div className="row">
          <button className="btn" onClick={startMic}>{listening ? '🎙 Listening...' : '🎙 Start speaking'}</button>
          <button className="btn ghost" onClick={() => speakBack(prompt)}>🔊 Hear prompt</button>
        </div>
        <h4>What you said:</h4>
        <textarea className="input" rows={4} value={text} onChange={e => setText(e.target.value)} placeholder="Your speech will appear here... or type it" />
        <div className="row" style={{ marginTop: 10 }}>
          <button className="btn small" onClick={() => { if (text) { speakBack(text); addXp(5); } }}>🔊 Play my speech</button>
          <span className="muted">Words: {text.trim() ? text.trim().split(/\s+/).length : 0} (+10 XP per recording)</span>
        </div>
      </div>
      <div className="card" style={{ marginTop: 14 }}>
        <h3>Shadowing tips</h3>
        <ul><li>Listen to 1 listening lesson 3 times.</li><li>Repeat immediately after the speaker.</li><li>Record yourself and compare.</li></ul>
      </div>
    </div>
  )
}
