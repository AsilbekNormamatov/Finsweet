import React from 'react'
import Header from '../components/nav/Header'
import Hero from '../components/hero/Hero'
import Sector from '../components/sector/Sector'
import Building from '../components/building/Building'
import StartUp from '../components/start-up/StartUp'
import Helping from '../components/helping/Helping'
import Energy from '../components/energy/Energy'
import Dream from '../components/dream/Dream'
import LatestBlog from '../components/latest-blog/LatestBlog'
import Footer from '../components/footer/Footer'

export default function HomePage() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Sector/>
        <Building/>
        <StartUp/>
        <Helping/>
        <Energy/>
        <Dream/>
        <LatestBlog/>
        <Footer/>
    </div>
  )
}
