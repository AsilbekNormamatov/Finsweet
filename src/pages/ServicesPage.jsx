import React from 'react'
import Header from '../components/nav/Header'
import ServiceHero from '../components/serviseheader/ServiceHero'
import Footer from '../components/footer/Footer'
import ServicesFeature from '../components/servicesfeature/ServicesFeature'
import Dream from '../components/dream/Dream'
import LatestBlog from '../components/latest-blog/LatestBlog'

export default function ServicesPage() {
  return (
    <div>
      <Header/>
      <ServiceHero/>
      <ServicesFeature/>
      <Dream/>
      <LatestBlog/>
      <Footer/>
    </div>
  )
}
