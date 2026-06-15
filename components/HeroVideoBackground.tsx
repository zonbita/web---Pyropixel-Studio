'use client'

import { useState, useRef, useEffect } from 'react'

const HERO_VIDEO = '/videos/background.mp4'

interface HeroVideoBackgroundProps {
  isPageReady?: boolean
}

export default function HeroVideoBackground({ isPageReady = false }: HeroVideoBackgroundProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsZoomed(false)

    const zoomTimer = setTimeout(() => setIsZoomed(true), 100)
    return () => clearTimeout(zoomTimer)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playVideo = () => video.play().catch(() => {})

    video.addEventListener('canplay', playVideo)
    video.load()

    return () => video.removeEventListener('canplay', playVideo)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={`absolute inset-0 transition-transform duration-[2000ms] ease-[cubic-bezier(0.1,0.75,0.4,0.95)] ${
          isZoomed ? 'scale-100' : 'scale-[1.3]'
        }`}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-[3] bg-black/45" aria-hidden="true" />
    </div>
  )
}
