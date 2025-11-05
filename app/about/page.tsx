'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import AboutUs from '@/components/AboutUs'
import ContentSection from '@/components/ContentSection'
import Footer from '@/components/Footer'

export default function AboutPage() {
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
    <main className="min-h-screen bg-black text-white relative">
      <Navigation />
      {/* Section 1: About Us Hero */}
      <AboutUs />
      {/* Section 2: About Content */}
      <ContentSection
        title="OUR STORY"
        subtitle="Building amazing experiences together"
        content={
          <div className="text-center">
            <p className="text-lg opacity-75 mb-8">
              We are a passionate team dedicated to creating innovative and engaging experiences.
            </p>
          </div>
        }
      />
      {/* Section 3: Team Values */}
      <ContentSection
        title="OUR VALUES"
        subtitle="What drives us"
        content={
          <div className="text-center">
            <p className="text-lg opacity-75">
              Excellence, creativity, and collaboration are at the heart of everything we do.
            </p>
          </div>
        }
      />
      <Footer />
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white text-black py-2 rounded-full hover:bg-gray-200 transition-colors z-50"
          aria-label="Scroll to top"
        >
          Top
        </button>
      )}
    </main>
  )
}

