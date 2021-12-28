import React from 'react'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'

export default function App() {
  return (
    <main className="font-raleway">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}
