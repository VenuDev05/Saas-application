import React from 'react'
import Navbar from './components/menu/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/menu/Footer'
import Home from './pages/Home'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App