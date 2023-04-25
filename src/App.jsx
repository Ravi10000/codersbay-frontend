import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainUI from './components/MainUI/MainUI'
import Services from './components/Services/Services'
import TopServices from './components/TopServices/TopServices'
import Register from './components/RegisterImg/Register'

function App() {
  return (
    <>
      <MainUI />
      <Services />
      <TopServices />
      <Register />
    </>
  )
}

export default App
