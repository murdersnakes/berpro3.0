import React from 'react'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import Hero from './components/Hero'
import Pain from './components/Pain'
import Testimonials from './components/Testimonials'
import { Metadata } from 'next'
import Pricing from './components/Pricing'



export default function page() {
  return (
    <div>
        <Hero />
        <Pain />
        <CTA />
        <Benefits />
        <Pricing />
        <Testimonials Autoplay={ undefined } />
        
    </div>
  )
}
