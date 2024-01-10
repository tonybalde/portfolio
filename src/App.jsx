import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
