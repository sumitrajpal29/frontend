import './App.css'
import Nav from './components/Nav'
import Skill from './components/Skill'
import Profile from './components/Profile'

function App() {
  const styleForText = { margin: '4rem' };
  return (
    <>
      <Nav />
      <div className="main-content">
        <div className="profile-left">
          <Profile />
        </div>
        <div style={styleForText}>
          <p>Hi, I’m Sumit Rajpal — a Full Stack Developer specializing in the MERN stack. I build scalable backends and intuitive frontends to deliver high-performance web applications with smooth, user-friendly experiences. Let’s collaborate and create something impactful! ⚙️🚀</p>
        </div>
      </div>
      <Skill />
    </>
  )
}

export default App
