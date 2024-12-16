import React from 'react'
import './App.css'
import HeroSection from './screens/HeroSection'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HeroSection/>}/>
        </Routes>
    </div>
  )
}

export default App
