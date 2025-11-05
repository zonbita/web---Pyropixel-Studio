'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import VideoPlayer from '@/components/VideoPlayer'
import Games from '@/components/Games'
import AboutUs from '@/components/AboutUs'
import Jobs from '@/components/Jobs'
import Footer from '@/components/Footer'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Video MP4 path - can be local file in public folder or external URL
  // Example: '/videos/background.mp4' for local file or 'https://example.com/video.mp4' for external
  const homeVideoSrc = '/videos/background.mp4' // Replace with your video path

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
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* Content above video */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Games />
        <AboutUs />
        <Jobs />
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

