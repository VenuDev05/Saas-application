import React from 'react'
import Navbar from './components/menu/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/menu/Footer'
import Home from './pages/Home'
import Plan from './pages/Plan'
import Contact from './pages/Contact'
import Admin from './admin/Admin'
import Login from './admin/Login'
import Register from './admin/Register'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/plan' element = {<Plan/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App