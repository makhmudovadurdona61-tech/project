import { useState } from 'react'
import { courses, premiumPlans } from '../data/content.js'
import { fmt } from '../payments.js'
import { useApp } from '../context/AppContext.jsx'
import PaymentModal from '../components/PaymentModal.jsx'

export default function Courses() {
  const { completeLesson, doneLessons, hasAccess, premiumActive, learnLang } = useApp()
  const [filter, setFilter] = useState('All')
  const [payItem, setPayItem] = useState(null)
  const list = courses.filter(c => c.lang === learnLang && (filter === 'All' || c.level === filter || (filter === 'Free' && c.price === 0) || (filter === 'Paid' && c.price > 0)))
  return (
    <div>
      <h1>🎓 Courses</h1>
      <p className="muted">{premiumActive && <span className="badge">👑 {learnLang === 'ko' ? 'Premium faollashtirildi' : 'Premium active'}</span>}</p>

      <div className="card" style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', color: '#fff', border: 0 }}>
        <h3 style={{ margin: '0 0 4px' }}>{learnLang === 'ko' ? '👑 Premium obuna — barcha pullik kurslar ochiq' : '👑 Premium — all paid courses unlocked'}</h3>
        <div className="grid c3" style={{ marginTop: 12 }}>
          {premiumPlans.map(p => (
            <div key={p.id} style={{ background: 'rgba(255,255,255,.15)', borderRadius: 12, padding: 14 }}>
              <b>{p.title}</b>
              <div style={{ fontSize: 22, fontWeight: 800 }}>{fmt(p.price)}</div>
              <div style={{ fontSize: 13, opacity: .9 }}>{p.desc}</div>
              <button className="btn small" style={{ marginTop: 8, background: '#fff', color: '#4f46e5' }} onClick={() => setPayItem(p)}>{learnLang === 'ko' ? 'Sotib olish' : 'Buy'}</button>
            </div>
          ))}
        </div>
      </div>

      <div className="row" style={{ marginTop: 14 }}>{['All', 'Free', 'Paid', 'Beginner', 'Intermediate', 'Advanced'].map(f => (
        <button key={f} className={filter === f ? 'btn small' : 'btn small ghost'} onClick={() => setFilter(f)}>{f}</button>
      ))}</div>
      <div className="grid c3" style={{ marginTop: 16 }}>
        {list.map(c => {
          const open = hasAccess(c)
          const enrolled = doneLessons.includes('course-' + c.id)
          return (
            <div className="card" key={c.id} style={{ opacity: open ? 1 : .95 }}>
              <div style={{ fontSize: 44 }}>{open ? c.img : '🔒'}</div>
              <h3>{c.title}</h3>
              <div className="row"><span className="badge">{c.level}</span><span className="badge">⭐ {c.rating}</span><span className="badge">📚 {c.lessons} lessons</span></div>
              <p className="muted">{open ? c.desc : (learnLang === 'ko' ? 'Pullik kurs — sotib olgach barcha darslar ochiladi.' : 'Paid course — all lessons unlock after purchase.')}</p>
              <div className="row">
                <b>{c.price === 0 ? (learnLang === 'ko' ? 'Bepul' : 'Free') : fmt(c.price)}</b><span className="spacer" />
                {open
                  ? <button className="btn small" onClick={() => completeLesson('course-' + c.id)}>{enrolled ? (learnLang === 'ko' ? '✅ Ro‘yxatdan o‘tdingiz' : '✅ Enrolled') : (learnLang === 'ko' ? 'Ro‘yxatdan o‘tish' : 'Enroll')}</button>
                  : <button className="btn small" onClick={() => setPayItem({ id: 'course-' + c.id, title: c.title, price: c.price })}>{learnLang === 'ko' ? 'Sotib olish' : 'Buy'}</button>}
              </div>
            </div>
          )
        })}
      </div>
      <PaymentModal item={payItem} onClose={() => setPayItem(null)} />
    </div>
  )
}
