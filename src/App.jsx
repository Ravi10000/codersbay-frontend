import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainUI from './components/MainUI/MainUI'
import Services from './components/Services/Services'
import TopServices from './components/TopServices/TopServices'
import Register from './components/RegisterImg/Register'
import AboutUs from './components/AboutUs/AboutUs'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import NewServices from './pages/NewServices'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<NewServices />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
