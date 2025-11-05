'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Games from '@/components/Games'
import AboutUs from '@/components/AboutUs'
import Jobs from '@/components/Jobs'
import Footer from '@/components/Footer'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Games />
      <AboutUs />
      <Jobs />
      <Footer />
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors z-50"
          aria-label="Scroll to top"
        >
          Top
        </button>
      )}
    </main>
  )
}

