'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'

function PageTopLabel() {
  const { t } = useLanguage()

  return (
    <span className="relative mt-2 block text-sm font-bold uppercase tracking-wide">
      <span className="absolute inset-0 translate-x-[-1px] text-[#ff574b]" aria-hidden="true">
        {t.common.top}
      </span>
      <span className="absolute inset-0 translate-x-[1px] text-[#00cbff]" aria-hidden="true">
        {t.common.top}
      </span>
      <span className="relative text-white">{t.common.top}</span>
    </span>
  )
}

function PageTopArrow() {
  return (
    <svg
      viewBox="0 0 30.5 16.7"
      className="mx-auto h-4 w-[30px] fill-white"
      aria-hidden="true"
    >
      <polygon points="29.1,16.7 15.3,2.8 1.4,16.7 0,15.3 15.3,0 30.5,15.3" />
    </svg>
  )
}

interface PageTopButtonProps {
  className?: string
}

export function PageTopButton({ className = '' }: PageTopButtonProps) {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t.common.scrollToTop}
      className={`group block text-center uppercase transition-opacity duration-300 ease-[cubic-bezier(0.1,0.75,0.4,0.95)] hover:opacity-30 ${className}`}
    >
      <PageTopArrow />
      <PageTopLabel />
    </button>
  )
}

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <PageTopButton className="fixed bottom-8 right-8 z-50 lg:bottom-10 lg:right-10" />
  )
}
