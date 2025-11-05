'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import YouTubeVideo from '@/components/YouTubeVideo'
import Games from '@/components/Games'
import AboutUs from '@/components/AboutUs'
import Jobs from '@/components/Jobs'
import Footer from '@/components/Footer'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Video ID for home section - replace with your YouTube video ID
  // Example: For URL https://www.youtube.com/watch?v=VIDEO_ID, use only 'VIDEO_ID'
  const homeVideoId = 'q3Syszp9HVw' // Paste your YouTube video ID here (e.g., 'dQw4w9WgXcQ')

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
        <YouTubeVideo 
          videoId={homeVideoId}
          title="Pyropixel Studio Introduction"
          className="w-screen h-screen"
          autoplay={true}
          muted={true}
          loop={true}
          controls={false}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
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
          className="fixed bottom-8 right-8 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors z-50"
          aria-label="Scroll to top"
        >
          Top
        </button>
      )}
    </main>
  )
}

