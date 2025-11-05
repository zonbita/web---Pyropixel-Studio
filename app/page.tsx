'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import VideoPlayer from '@/components/VideoPlayer'
import SectionPreview from '@/components/SectionPreview'
import Footer from '@/components/Footer'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Video MP4 path - can be local file in public folder or external URL
  const homeVideoSrc = '/videos/background.mp4' // Replace with your video path

  // Preview images for sections
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
      {/* Background Video - Behind Navigation and Hero */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <VideoPlayer 
          src={homeVideoSrc}
          className="w-screen h-screen"
          autoplay={true}
          muted={true}
          loop={true}
          controls={false}
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* Content above video */}
      <div className="relative z-10">
        <Navigation />
        {/* Section 1: Hero */}
        <Hero />
        {/* Section 2: Games Preview */}
        <SectionPreview
          title="GAMES"
          subtitle="CHECK OUT OUR WORK"
          href="/games"
          image={gamesPreview}
        />
        {/* Section 3: About Us Preview */}
        <SectionPreview
          title="ABOUT US"
          subtitle="MEET THE TEAM"
          href="/about"
          image={aboutPreview}
        />
        {/* Section 4: Jobs Preview */}
        <SectionPreview
          title="JOBS"
          subtitle="JOIN US"
          href="/jobs"
          image={jobsPreview}
        />
        <Footer />
      </div>
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

