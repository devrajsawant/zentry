import React from 'react'
import Hero from './components/hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Feature from './components/Feature'
import Story from './components/story'
import WhoWeAre from './components/WhoWeAre'

const App = () => {
  return (
    <div className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Story />
      <WhoWeAre />
    </div>
  )
}

export default App
