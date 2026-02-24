import React from 'react'
import Header from '../components/nav/Header'
import Footer from '../components/footer/Footer'
import CareersHero from '../components/careerhero/CareersHero'
import CareersPosition from '../components/careersposition/CareersPosition'
import LatestBlog from '../components/latest-blog/LatestBlog'

export default function CareersPage() {
  return (
    <div>
      <Header/>
      <CareersHero/>
      <CareersPosition/>
      <LatestBlog/>
      <Footer/>
    </div>
  )
}
