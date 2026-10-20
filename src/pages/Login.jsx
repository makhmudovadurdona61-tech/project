import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { loginWithGoogle, logoutGoogle, isFirebaseReady } from '../firebase.js'
import { sendTelegram } from '../telegram.js'

export async function doGoogleLogin(setUser, nav, setBusy) {
  setBusy(true)
  try {
    const u = await loginWithGoogle()
    // Google akkauntni mahalliy ro'yxatga ham qo'shib qo'yamiz (Admin statistikasi uchun)
    try {
      const users = JSON.parse(localStorage.getItem('langup-accounts') || '[]')
      if (!users.some(x => x.email === u.email)) {
        users.push({ name: u.name, email: u.email, pass: 'google-oauth' })
        localStorage.setItem('langup-accounts', JSON.stringify(users))
      }
    } catch {}
    setUser(u)
    sendTelegram(`👤 <b>Yangi foydalanuvchi (Google)</b>\n📛 ${u.name}\n✉️ ${u.email}`)
    nav('/profile')
  } catch (e) {
    alert(e.message || 'Google orqali kirishda xatolik.')
  } finally {
    setBusy(false)
  }
}

export default function Login() {
  const { setUser } = useApp()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [busy, setBusy] = useState(false)
  const nav = useNavigate()
  const submit = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('langup-accounts') || '[]')
    const found = users.find(u => u.email === email && u.pass === pass)
    if (!found) return alert('Account not found. Please register first.')
    setUser({ name: found.name, email: found.email })
    sendTelegram(`🔑 <b>Kirish (login)</b>\n📛 ${found.name}\n✉️ ${found.email}`)
    nav('/profile')
  }
  return (
    <div className="card" style={{ maxWidth: 420, margin: '30px auto' }}>
      <h2>Welcome back 👋</h2>
      <button className="btn ghost" style={{ width: '100%', marginBottom: 12 }} disabled={busy}
        onClick={() => doGoogleLogin(setUser, nav, setBusy)}>
        {busy ? '⏳...' : '🔵 Google bilan kirish'}
      </button>
      {!isFirebaseReady && (
        <p className="muted" style={{ fontSize: 13 }}>⚠️ Google tugma Firebase ulangach ishlaydi. Yo‘riqnoma: <code>src/firebase.js</code></p>
      )}
      <p className="muted" style={{ textAlign: 'center' }}>— yoki email bilan —</p>
      <form onSubmit={submit} className="grid">
        <input className="input" placeholder="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
        <input className="input" placeholder="Password" type="password" required value={pass} onChange={e => setPass(e.target.value)} />
        <button className="btn">Login</button>
      </form>
      <p className="muted">No account? <Link to="/register" style={{ color: 'var(--primary)' }}>Register</Link></p>
    </div>
  )
}

export { logoutGoogle }
