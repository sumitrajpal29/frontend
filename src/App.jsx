import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Skill from './components/Skill'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Profile />
      <div>
        <p>Hi, I'm Sumit Rajpal Software Developer Experienced Software Developer & Tech Lead specializing in scalable systems. I craft robust backends and seamless frontends, delivering high-performance web apps with smooth UX. Let’s build something amazing together! ⚙️✨</p>
      </div>
      {/* <Skill /> */}
    </>
  )
}

export default App
