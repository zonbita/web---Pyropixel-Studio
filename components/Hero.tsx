'use client'

import { useEffect, useState } from 'react'
import HeroVideoBackground from './HeroVideoBackground'
import { useLanguage } from '@/components/LanguageProvider'

interface HeroProps {
  isPageReady?: boolean
}

export default function Hero({ isPageReady = false }: HeroProps) {
  const [isTextVisible, setIsTextVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    if (!isPageReady) return
    setIsTextVisible(true)
  }, [isPageReady])

  const scrollToContent = () => {
    document.getElementById('games-preview')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <HeroVideoBackground isPageReady={isPageReady} />

      <div
        className={`absolute z-10 flex w-full flex-col items-center justify-center px-5 text-center text-white ${
          isTextVisible ? 'hero-text-loaded' : 'hero-text-hidden'
        }`}
        style={{ top: '42vh', paddingBottom: '30px' }}
      >
        <p className="relative mb-3 inline-block pb-4 text-xl font-bold tracking-wide text-white md:text-2xl lg:text-4xl">
          PYROPIXEL
          <span
            className="brand-gradient-line absolute bottom-0 left-0 h-0.5 w-full"
            aria-hidden="true"
          />
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight drop-shadow-lg sm:text-5xl md:text-5xl lg:text-5xl">
          {t.hero.tagline}
        </h1>
      </div>

      <button
        type="button"
        onClick={scrollToContent}
        className={`absolute bottom-8 left-1/2 z-10 -translate-x-1/2 cursor-pointer transition-opacity duration-300 hover:opacity-30 md:bottom-10 ${
          isTextVisible ? 'hero-text-loaded' : 'hero-text-hidden'
        }`}
        aria-label={t.common.scrollToContent}
      >
        <svg
          viewBox="0 0 40 22"
          className="h-5 w-10 stroke-white stroke-[4] fill-none md:h-6 md:w-12"
          aria-hidden="true"
        >
          <polyline points="2,2 20,20 38,2" />
        </svg>
      </button>
    </section>
  )
}
