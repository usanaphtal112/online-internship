import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Internship from './Components/Internship'
import Service from './Components/Service'

const AppRoutes = () => {
  return (
    <>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </>
  )
}

export default AppRoutes