import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { doGoogleLogin } from './Login.jsx'
import { sendTelegram } from '../telegram.js'

export default function Register() {
  const { setUser } = useApp()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [busy, setBusy] = useState(false)
  const nav = useNavigate()
  const submit = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('langup-accounts') || '[]')
    if (users.some(u => u.email === email)) return alert('Email already registered. Please login.')
    users.push({ name, email, pass })
    localStorage.setItem('langup-accounts', JSON.stringify(users))
    setUser({ name, email })
    sendTelegram(`👤 <b>Yangi ro'yxatdan o'tish</b>\n📛 ${name}\n✉️ ${email}`)
    nav('/profile')
  }
  return (
    <div className="card" style={{ maxWidth: 420, margin: '30px auto' }}>
      <h2>Create account 🚀</h2>
      <button className="btn ghost" style={{ width: '100%', marginBottom: 12 }} disabled={busy}
        onClick={() => doGoogleLogin(setUser, nav, setBusy)}>
        {busy ? '⏳...' : '🔵 Google bilan ro‘yxatdan o‘tish'}
      </button>
      <p className="muted" style={{ textAlign: 'center' }}>— yoki email bilan —</p>
      <form onSubmit={submit} className="grid">
        <input className="input" placeholder="Full name" required value={name} onChange={e => setName(e.target.value)} />
        <input className="input" placeholder="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
        <input className="input" placeholder="Password (min 4)" minLength={4} type="password" required value={pass} onChange={e => setPass(e.target.value)} />
        <button className="btn">Sign up free</button>
      </form>
      <p className="muted">Have account? <Link to="/login" style={{ color: 'var(--primary)' }}>Login</Link></p>
    </div>
  )
}
