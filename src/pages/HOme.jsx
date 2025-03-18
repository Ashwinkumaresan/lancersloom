import React from 'react'
import Hero from '../components/home/hero'
import About from '../components/home/About'
import Skills from '../components/home/Skills'
import Portfolio from '../components/home/Portfolio'
import Testimonials from '../components/home/Testimonials'
import Contact from '../components/home/Contact'
import Footer from '../components/Footer'

export const Home = () => {
  return (
    <main>
        <Hero/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </main>
  )
}
