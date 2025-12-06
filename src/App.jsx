import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar.jsx'
import Hero from './pages/Hero.jsx'
import About from './pages/About.jsx'
import Tracks from './pages/Tracks.jsx'
import Timeline from './pages/Timeline.jsx'
import Footer from './pages/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <Footer />
    </>
  )
}

export default App
