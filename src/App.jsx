import React from 'react'
import Navbar from './components/menu/Navbar'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Footer from './components/menu/Footer'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App