import React from 'react'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import Hero from './components/Hero'
import Pain from './components/Pain'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

export default function page() {
  return (
    <div>
        <Hero />
        <Pain />
        <Benefits />
        <Testimonials />
        <CTA />
    </div>
  )
}
