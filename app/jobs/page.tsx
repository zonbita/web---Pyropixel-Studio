'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Jobs from '@/components/Jobs'
import ContentSection from '@/components/ContentSection'
import Footer from '@/components/Footer'

export default function JobsPage() {
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
      {/* Section 1: Jobs Hero */}
      <Jobs />
      {/* Section 2: Open Positions */}
      <ContentSection
        title="OPEN POSITIONS"
        subtitle="Join our team"
        content={
          <div className="text-center">
            <p className="text-lg opacity-75 mb-8">
              We&apos;re always looking for talented individuals to join our team.
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

