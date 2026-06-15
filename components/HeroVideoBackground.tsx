'use client'

import { useState, useRef, useEffect } from 'react'

const ASSETS = {
  desktop: {
    poster: 'https://s3.teamasobi.com/site/_pc169retina/astro-bot-b.jpg',
    video: 'https://s3.teamasobi.com/site/TEAMASOBI_2024_website_PC_Top_Page_2024-06-04-030633_acmt.mp4',
  },
  mobile: {
    poster: 'https://s3.teamasobi.com/site/_sp916retina/5914/MasterImage_1440x2160_R-copy_2024-06-04-034548_xraa.jpg',
    video: 'https://s3.teamasobi.com/site/TEAMASOBI_2024_website_Smartphone_Top_Page_2024-06-04-030627_debn.mp4',
  },
}

interface HeroVideoBackgroundProps {
  isPageReady?: boolean
}

function useMobilePortrait() {
  const [isMobilePortrait, setIsMobilePortrait] = useState(false)

  useEffect(() => {
    const checkViewport = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isPortrait = window.innerHeight > window.innerWidth
      const isNarrow = window.innerWidth < 960
      setIsMobilePortrait(isTouchDevice && isPortrait && isNarrow)
    }

    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  return isMobilePortrait
}

export default function HeroVideoBackground({ isPageReady = false }: HeroVideoBackgroundProps) {
  const [hidePoster, setHidePoster] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobilePortrait = useMobilePortrait()
  const assets = isMobilePortrait ? ASSETS.mobile : ASSETS.desktop

  useEffect(() => {
    setHidePoster(false)
    setIsZoomed(false)

    const zoomTimer = setTimeout(() => setIsZoomed(true), 100)
    return () => clearTimeout(zoomTimer)
  }, [assets.video])

  useEffect(() => {
    if (!isPageReady) return
    const posterTimer = setTimeout(() => setHidePoster(true), 300)
    return () => clearTimeout(posterTimer)
  }, [isPageReady])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playVideo = () => video.play().catch(() => {})

    video.addEventListener('canplay', playVideo)
    video.load()

    return () => video.removeEventListener('canplay', playVideo)
  }, [assets.video])

  const handleCanPlay = () => {
    if (isPageReady) setHidePoster(true)
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={`absolute inset-0 transition-transform duration-[2000ms] ease-[cubic-bezier(0.1,0.75,0.4,0.95)] ${
          isZoomed ? 'scale-100' : 'scale-[1.3]'
        }`}
      >
        <div
          className={`absolute inset-0 z-[2] bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-in-out ${
            hidePoster ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ backgroundImage: `url(${assets.poster})` }}
          aria-hidden="true"
        />

        <video
          ref={videoRef}
          key={assets.video}
          className="absolute inset-0 h-full w-full object-cover object-center"
          poster={assets.poster}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          onCanPlay={handleCanPlay}
        >
          <source src={assets.video} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-[3] bg-black/45" aria-hidden="true" />
    </div>
  )
}
