import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Vocabulary from './pages/Vocabulary.jsx'
import Grammar from './pages/Grammar.jsx'
import Courses from './pages/Courses.jsx'
import Tests from './pages/Tests.jsx'
import Listening from './pages/Listening.jsx'
import Reading from './pages/Reading.jsx'
import Speaking from './pages/Speaking.jsx'
import Profile from './pages/Profile.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Admin from './pages/Admin.jsx'
import AI from './pages/AI.jsx'
import TOPIK from './pages/TOPIK.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ minHeight: '70vh', paddingTop: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/listening" element={<Listening />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/topik" element={<TOPIK />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
