import React from 'react'
import Header from '../components/nav/Header'
import Feature from '../components/feature/Feature'
import About from '../components/about/About'
import TeamWork from '../components/team/TeamWork'
import Dream from '../components/dream/Dream'
import Footer from '../components/footer/Footer'
import LatestBlog from '../components/latest-blog/LatestBlog'
import AboutHero from '../components/Abuthero/AboutHero'

export default function AboutPage() {
  return (
    <div>
      <Header/>
      <AboutHero/>
      <Feature/>
      <About/>
      <TeamWork/>
      <Dream/>
      <LatestBlog/>
      <Footer/>
    </div>
  )
}
