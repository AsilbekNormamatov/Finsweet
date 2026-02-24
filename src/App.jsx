import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import CareersPage from './pages/CareersPage'
import BlogPage from './pages/BlogPage'
import BlogInnerPage from './pages/BlogInnerPage'
import ContactPage from './pages/ContactPage'
import CareersTeastPage from './pages/CareersTeastPage'
import PrivacyPage from './pages/PrivacyPage'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/services' element={<ServicesPage/>}/>
      <Route path='/careers' element={<CareersPage/>}/>
      <Route path='/careersteast' element={<CareersTeastPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/blog-inner' element={<BlogInnerPage/>}/>
      <Route path='/pervacy-policy' element={<PrivacyPage/>}/>
    </Routes>
  )
}
