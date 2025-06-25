import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/Layout/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'

const Routing = () => {
  return (
     <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
      </Route>
    </Routes>
  )
}

export default Routing