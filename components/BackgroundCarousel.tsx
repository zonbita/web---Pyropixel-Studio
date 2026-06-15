'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { PreviewSlide } from '@/lib/homePreviewImages'

interface BackgroundCarouselProps {
  desktopSlides: PreviewSlide[]
  mobileSlides: PreviewSlide[]
  inView?: boolean
  intervalMs?: number
}

function useDesktopSlides() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkViewport = () => setIsDesktop(window.innerWidth >= 960)
    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  return isDesktop
}

function CarouselSlide({
  slide,
  isActive,
  isVisible,
}: {
  slide: PreviewSlide
  isActive: boolean
  isVisible: boolean
}) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
        isActive && isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden={!isActive}
    >
      <Image
        src={slide.src}
        alt={slide.alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority={isActive}
        unoptimized
      />
      <div className="absolute inset-0 bg-black/45" />
    </div>
  )
}

export default function BackgroundCarousel({
  desktopSlides,
  mobileSlides,
  inView = true,
  intervalMs = 5000,
}: BackgroundCarouselProps) {
  const isDesktop = useDesktopSlides()
  const slides = isDesktop ? desktopSlides : mobileSlides
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(0)
  }, [isDesktop])

  useEffect(() => {
    if (!inView || slides.length <= 1) return

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, intervalMs)

    return () => clearInterval(timer)
  }, [inView, slides.length, intervalMs])

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <CarouselSlide
          key={slide.src}
          slide={slide}
          isActive={index === activeIndex}
          isVisible={inView}
        />
      ))}
    </div>
  )
}
