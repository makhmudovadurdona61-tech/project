import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { vocabulary, grammar, courses, readings, listenings } from '../data/content.js'
import { dailyChallenges } from '../data/content.js'
import { useApp } from '../context/AppContext.jsx'
import { t } from '../i18n.js'

const speak = (ttext, lang) => {
  try { const u = new SpeechSynthesisUtterance(ttext); u.lang = lang === 'ko' ? 'ko-KR' : 'en-US'; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch {}
}

export default function Home() {
  const { user, xp, level, setLevel, results, doneLessons, savedWords, uiLang } = useApp()
  const nav = useNavigate()
  const today = dailyChallenges[new Date().getDate() % dailyChallenges.length]

  const sections = [
    { icon: '📚', key: 'navVocabulary', dKey: 'homeVocabDesc', to: '/vocabulary' },
    { icon: '📖', key: 'navGrammar', dKey: 'homeGrammarDesc', to: '/grammar' },
    { icon: '🎓', key: 'navCourses', dKey: 'homeCoursesDesc', to: '/courses' },
    { icon: '📝', key: 'navTests', dKey: 'homeTestsDesc', to: '/tests' },
    { icon: '🎧', key: 'navListening', dKey: 'homeListeningDesc', to: '/listening' },
    { icon: '📄', key: 'navReading', dKey: 'homeReadingDesc', to: '/reading' },
    { icon: '🎤', key: 'navSpeaking', dKey: 'homeSpeakingDesc', to: '/speaking' },
    { icon: '👤', key: 'navProfile', dKey: 'homeProfileDesc', to: '/profile' },
  ]

  return (
    <div style={{ minHeight: '100vh' }}>
      <section className="hero" style={{ padding: '60px 0 40px 0' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span className="badge" style={{ fontSize: 11 }}>{t(uiLang, 'level')} Beginner → Intermediate → Advanced</span>
            <button className="btn small ghost" style={{ marginLeft: 'auto' }} onClick={() => { }}>{t(uiLang, 'btnDark')}</button>
          </div>
          <h1 style={{ fontSize: 'clamp(34px, 6vw, 56px)', margin: '10px 0 16px', lineHeight: 1.1 }}>
            Learn Korean <span style={{ color: '#4f46e5' }}>easily</span> & effectively.
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'var(--muted)', marginBottom: 22, maxWidth: 560, lineHeight: 1.6 }}>
            {t(uiLang, 'homeSub')}
          </p>
          <div className="row" style={{ gap: 10, flexWrap: 'wrap' }}>
            {user ? <Link className="btn" to="/vocabulary">{t(uiLang, 'btnContinue')}</Link> :
              <><Link className="btn" to="/register">{t(uiLang, 'btnGetStarted')}</Link><Link className="btn ghost" to="/courses">{t(uiLang, 'btnViewCourses')}</Link></>}
          </div>
          <div className="row" style={{ marginTop: 18, gap: 8, flexWrap: 'wrap' }}>
            {['Beginner', 'Intermediate', 'Advanced'].map(l => (
              <button key={l} className={level === l ? 'btn small' : 'btn small ghost'} onClick={() => setLevel(l)}>{l}</button>
            ))}
          </div>
        </div>
        <div className="hero-art" style={{ fontSize: 'clamp(80px, 20vw, 130px)' }}>🇰🇷📖✨</div>
      </section>

      <section style={{ padding: '30px 0', background: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
        <div className="grid c4" style={{ gap: 16 }}>
          {[ { v: `${xp}`, l: t(uiLang, 'stats.xp') }, { v: savedWords.length, l: t(uiLang, 'stats.saved') }, { v: doneLessons.length, l: t(uiLang, 'stats.lessons') }, { v: results.length, l: t(uiLang, 'stats.tests') } ].map(s => (
            <div className="card" key={s.l} style={{ textAlign: 'center', padding: 20 }}>
              <div className="stat-num">{s.v}</div>
              <div className="muted" style={{ fontSize: 13 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '50px 0' }}>
        <div className="row" style={{ gap: 30, alignItems: 'start', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 style={{ fontSize: 28, marginBottom: 14 }}>{t(uiLang, 'sectionAbout')}</h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: 14 }}>{t(uiLang, 'aboutText')}</p>
            <ul style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
              <li>🎯 3 levels: Beginner → Intermediate → Advanced</li>
              <li>🇺🇿🇷🇺🇬🇧🇰🇷 Translations in Uzbek, Russian, English and Korean</li>
              <li>🔊 Native TTS pronunciation and microphone speaking</li>
              <li>💾 Save words, track XP and progress</li>
              <li>📊 Test results saved in your profile</li>
              <li>🤖 AI Tutor — chat and ask questions</li>
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: 280, display: 'flex', justifyContent: 'center' }}>
            <div className="card" style={{ padding: 0, border: 0, boxShadow: 'none', background: 'transparent' }}>
              <div style={{ fontSize: 110, textAlign: 'center', marginBottom: 16 }}>🇰🇷</div>
              <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{t(uiLang, 'homeSub')}</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '50px 0', background: 'var(--bg)' }}>
        <h2 style={{ textAlign: 'center', fontSize: 28, marginBottom: 40 }}>{t(uiLang, 'why')}</h2>
        <div className="grid c3" style={{ gap: 16 }}>
          {[
            { icon: '🎯', key: 'homeTOPIK', dKey: 'homeTOPIKDesc' },
            { icon: '🎤', key: 'homeSpeakingF', dKey: 'homeSpeakingFDesc' },
            { icon: '📚', key: 'homeVocabG', dKey: 'homeVocabGDesc' },
          ].map(f => (
            <div className="card" key={f.key}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ marginBottom: 8 }}>{t(uiLang, f.key)}</h3>
              <p className="muted" style={{ fontSize: 14, lineHeight: 1.6 }}>{t(uiLang, f.dKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '50px 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: 28, marginBottom: 24 }}>{t(uiLang, 'btnViewCourses')}</h2>
        <div className="grid c3" style={{ gap: 16 }}>
          {courses.slice(0, 3).map(c => (
            <Link key={c.id} className="card" to="/courses">
              <div style={{ fontSize: 44 }}>{c.img}</div>
              <h3 style={{ margin: '12px 0 6px' }}>{c.title}</h3>
              <div className="row"><span className="badge">{c.level}</span><span className="badge">⭐ {c.rating}</span></div>
              <p className="muted" style={{ fontSize: 14 }}>{c.desc}</p>
              <div className="row" style={{ marginTop: 12 }}><b>{c.price === 0 ? t(uiLang, 'btnGetStarted') : `$${c.price}`}</b><span className="spacer" /><button className="btn small">{t(uiLang, 'btnEnroll')}</button></div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: '50px 0', background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', color: '#fff' }}>
        <div className="card" style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)' }}>
          <h2 style={{ margin: '0 0 12px', color: '#fff' }}>{t(uiLang, 'ready')}</h2>
          <div style={{ fontSize: 20, fontWeight: 700 }}>{today}</div>
          <div style={{ marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button className="btn small ghost" style={{ background: '#fff', color: '#4f46e5' }} onClick={() => nav('/vocabulary')}>{t(uiLang, 'startFree')}</button>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: 28, marginBottom: 14 }}>{t(uiLang, 'ready')}</h2>
        <p className="muted" style={{ marginBottom: 24 }}>{t(uiLang, 'readySub')}</p>
        <div className="row" style={{ justifyContent: 'center', gap: 10 }}>
          <Link className="btn" to="/register">{t(uiLang, 'startFree')}</Link>
          <Link className="btn ghost" to="/courses">{t(uiLang, 'viewAll')}</Link>
        </div>
      </section>
    </div>
  )
}
