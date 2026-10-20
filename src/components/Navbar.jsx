import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { UI, t, LANG_NAMES } from '../i18n.js'
import { useState } from 'react'

export default function Navbar() {
  const { theme, toggleTheme, user, logout, xp, uiLang, setUiLang, learnLang } = useApp()
  const [open, setOpen] = useState(false)
  const nav = useNavigate()

  const links = [
    ['/', 'navHome'], ['/vocabulary', 'navVocabulary'], ['/grammar', 'navGrammar'],
    ['/courses', 'navCourses'], ['/tests', 'navTests'], ['/listening', 'navListening'],
    ['/reading', 'navReading'], ['/speaking', 'navSpeaking'], ['/ai', 'navAI'], ['/profile', 'navProfile'],
  ]

  return (
    <nav className="topnav">
      {/* 1-qator: logo + harakatlar */}
      <div className="container nav-bar">
        <button className="icon-btn burger" onClick={() => setOpen(o => !o)} aria-label="Menu">{open ? '✖' : '☰'}</button>
        <Link className="logo" to="/">📘 RM Korean</Link>
        <div className="spacer" />
        <span className="badge xp-badge">⚡ {xp} XP</span>
        <button className="icon-btn theme-btn" onClick={toggleTheme} title={t(uiLang, 'btnDark')}>{theme === 'light' ? '🌙' : '☀️'}</button>

        {/* Til tanlov — bitta tugma orqali ketma-ket o‘tadi */}
        <div className="row nav-lang">
          <span className="muted" style={{ fontSize: 12, marginRight: 6 }}>UI:</span>
          <button className="btn small" onClick={() => setUiLang(l => {
            const order = ['uz', 'ru', 'en', 'ko'];
            const i = order.indexOf(l);
            return order[(i + 1) % order.length];
          })}>{LANG_NAMES[uiLang]}</button>
        </div>
        <div className="row nav-lang">
          <span className="muted" style={{ fontSize: 12, marginRight: 6 }}>Learn:</span>
          <button className="btn small" onClick={() => setLearnLang(l => l === 'ko' ? 'en' : 'ko')}>
            {learnLang === 'ko' ? '🇰🇷 Korean' : '🇬🇧 English'}
          </button>
        </div>

        {user
          ? <div className="row nav-auth"><span className="muted user-name">{user.name}</span><button className="btn small ghost" onClick={() => { logout(); nav('/'); }}>{t(uiLang, 'btnLogout')}</button></div>
          : <div className="row nav-auth"><button className="btn small ghost" onClick={() => nav('/login')}>{t(uiLang, 'btnLogin')}</button><button className="btn small" onClick={() => nav('/register')}>{t(uiLang, 'btnSignup')}</button></div>}
      </div>
      {/* 2-qator: sahifa linklari (desktop) */}
      <div className="container nav-links">
        {links.map(([to, key]) => (
          <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'active' : ''}>{t(uiLang, key)}</NavLink>
        ))}
      </div>
      {/* Mobil menyu */}
      {open && (
        <div className="container mobile-menu">
          {links.map(([to, key]) => (
            <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>{t(uiLang, key)}</NavLink>
          ))}
          {user ? (
            <div style={{ paddingTop: 8 }}><button className="btn small ghost" style={{ width: '100%' }} onClick={() => { logout(); nav('/'); }}>{t(uiLang, 'btnLogout')}</button></div>
          ) : (
            <div style={{ paddingTop: 8 }}><button className="btn small ghost" style={{ width: '100%' }} onClick={() => nav('/login')}>{t(uiLang, 'btnLogin')}</button><button className="btn small" style={{ width: '100%', marginTop: 6 }} onClick={() => nav('/register')}>{t(uiLang, 'btnSignup')}</button></div>
          )}
        </div>
      )}
    </nav>
  )
}
