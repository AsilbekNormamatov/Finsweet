import React from 'react'
import Header from '../components/nav/Header'
import BlogHero from '../components/bloghero/BlogHero'
import Footer from '../components/footer/Footer'
import BlogPosts from '../components/blogposts/BlogPosts'

export default function BlogPage() {
  return (
    <div>
      <Header/>
      <BlogHero/>
      <BlogPosts/>
      <Footer/>
    </div>
  )
}
