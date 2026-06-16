'use client'

import Link from 'next/link'
import { type ReactNode } from 'react'
import BackgroundCarousel from './BackgroundCarousel'
import MoreButton from './MoreButton'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/components/LanguageProvider'
import type { PreviewSlide } from '@/lib/homePreviewImages'

interface SectionPreviewProps {
  id?: string
  title: string
  subtitle: string
  href: string
  slides: PreviewSlide[]
  mobileSlides?: PreviewSlide[]
  showMoreButton?: boolean
  homeTypography?: boolean
}

function InviewItem({
  isVisible,
  delay,
  children,
  className = '',
}: {
  isVisible: boolean
  delay: '1' | '2' | '3'
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`inview-item inview-delay-${delay} ${isVisible ? 'inview-active' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default function SectionPreview({
  id,
  title,
  subtitle,
  href,
  slides,
  mobileSlides,
  showMoreButton = true,
  homeTypography = false,
}: SectionPreviewProps) {
  const { ref, isVisible } = useInView(0.2)
  const { t } = useLanguage()
  const titleClass = homeTypography
    ? 'home-section-title mb-0 tracking-tight'
    : 'mb-6 text-4xl font-bold tracking-tight md:mb-8 md:text-5xl lg:text-5xl'
  const subtitleClass = homeTypography
    ? 'home-section-subtitle mb-8 opacity-90 drop-shadow-md md:mb-12'
    : 'mb-8 text-lg font-bold opacity-90 drop-shadow-md md:mb-12 md:text-xl lg:text-2xl'

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 overflow-hidden"
    >
      <BackgroundCarousel
        desktopSlides={slides}
        mobileSlides={mobileSlides ?? slides}
        inView={isVisible}
      />

      <div className="relative z-20 w-full mx-auto px-9">
        <div className="text-center mb-12 md:mb-16">
          <InviewItem isVisible={isVisible} delay="1">
            <h2 className={titleClass}>
              <Link
                href={href}
                className="relative inline-block pb-4 text-white transition-opacity duration-300 hover:opacity-80"
              >
                {title}
                <span
                  className="brand-gradient-line absolute bottom-0 left-0 h-0.5 w-full"
                  aria-hidden="true"
                />
              </Link>
            </h2>
          </InviewItem>
          <InviewItem isVisible={isVisible} delay="2">
            <p className={subtitleClass}>
              {subtitle}
            </p>
          </InviewItem>
        </div>

        {showMoreButton && (
          <InviewItem isVisible={isVisible} delay="3" className="text-center">
            <MoreButton href={href} label={t.common.more} />
          </InviewItem>
        )}
      </div>
    </section>
  )
}
