'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import LoadingCover from '@/components/LoadingCover'
import SectionPreview from '@/components/SectionPreview'
import Footer from '@/components/Footer'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isPageReady, setIsPageReady] = useState(false)

  const gamesPreview = {
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&h=900&fit=crop',
    alt: 'Games Preview',
  }

  const aboutPreview = {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop',
    alt: 'About Us Preview',
  }

  const jobsPreview = {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop',
    alt: 'Jobs Preview',
  }

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
      <LoadingCover onHidden={() => setIsPageReady(true)} />
      <Navigation />
      <Hero isPageReady={isPageReady} />
      <SectionPreview
        id="games-preview"
        title="GAMES"
        subtitle="CHECK OUT OUR WORK"
        href="/games"
        image={gamesPreview}
      />
      <SectionPreview
        title="ABOUT US"
        subtitle="MEET THE TEAM"
        href="/about"
        image={aboutPreview}
      />
      <SectionPreview
        title="JOBS"
        subtitle="JOIN US"
        href="/jobs"
        image={jobsPreview}
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
