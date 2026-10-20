import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

export default function Profile() {
  const { user, savedWords, toggleSaveWord, xp, results, doneLessons, level, setLevel } = useApp()
  if (!user) return (
    <div className="card" style={{ textAlign: 'center', padding: 40 }}>
      <h2>Please login to see your profile</h2>
      <div className="row" style={{ justifyContent: 'center' }}><Link className="btn" to="/login">Login</Link><Link className="btn ghost" to="/register">Register</Link></div>
    </div>
  )
  return (
    <div>
      <h1>👤 {user.name}</h1>
      <p className="muted">{user.email} • Level: {level} • ⚡ {xp} XP</p>
      <div className="row">
        {['Beginner', 'Intermediate', 'Advanced'].map(l => (
          <button key={l} className={level === l ? 'btn small' : 'btn small ghost'} onClick={() => setLevel(l)}>{l}</button>
        ))}
      </div>
      <div className="grid c2" style={{ marginTop: 16 }}>
        <div className="card">
          <h3>⭐ Saved words ({savedWords.length})</h3>
          {savedWords.length === 0 && <p className="muted">No saved words yet. Go to Vocabulary and press ☆.</p>}
          <table className="tbl">{savedWords.map(w => (
            <tr key={w.en}><td><b>{w.en}</b><br /><span className="muted">{w.uz}</span></td>
              <td><button className="icon-btn" onClick={() => toggleSaveWord(w)}>✖</button></td></tr>
          ))}</table>
        </div>
        <div className="card">
          <h3>📝 Test results ({results.length})</h3>
          {results.length === 0 && <p className="muted">No tests yet. <Link to="/tests">Take a test →</Link></p>}
          <table className="tbl">{results.map((r, i) => (
            <tr key={i}><td>{r.test}</td><td><b>{r.score}/{r.total}</b></td><td className="muted">{new Date(r.date).toLocaleDateString()}</td></tr>
          ))}</table>
          <h3 style={{ marginTop: 16 }}>📚 Lessons done: {doneLessons.length}</h3>
          <div className="progress"><div style={{ width: `${Math.min(100, doneLessons.length * 5)}%` }} /></div>
          <div style={{ marginTop: 12 }}><Link className="btn small ghost" to="/admin">Open Admin panel →</Link></div>
        </div>
      </div>
    </div>
  )
}
