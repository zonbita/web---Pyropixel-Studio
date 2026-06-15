'use client'

import { type ReactNode } from 'react'
import BackgroundCarousel from './BackgroundCarousel'
import MoreButton from './MoreButton'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/components/LanguageProvider'
import type { PreviewSlides } from '@/lib/homePreviewImages'

interface SectionPreviewProps {
  id?: string
  title: string
  subtitle: string
  href: string
  slides: PreviewSlides
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

export default function SectionPreview({ id, title, subtitle, href, slides }: SectionPreviewProps) {
  const { ref, isVisible } = useInView(0.2)
  const { t } = useLanguage()

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 bg-black overflow-hidden"
    >
      <BackgroundCarousel
        desktopSlides={slides.desktop}
        mobileSlides={slides.mobile}
        inView={isVisible}
      />

      <div className="relative z-20 w-full mx-auto px-9">
        <div className="text-center mb-12 md:mb-16">
          <InviewItem isVisible={isVisible} delay="1">
            <h2 className="relative inline-block pb-4 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight drop-shadow-lg">
              {title}
              <span
                className="absolute bottom-0 left-0 h-0.5 w-full"
                style={{
                  background:
                    'linear-gradient(90deg, rgb(0, 203, 240) 0%, rgb(200, 100, 250) 33%, rgb(255, 87, 64) 66%, rgb(255, 187, 0) 100%)',
                }}
              />
            </h2>
          </InviewItem>
          <InviewItem isVisible={isVisible} delay="2">
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90 drop-shadow-md font-bold">
              {subtitle}
            </p>
          </InviewItem>
        </div>

        <InviewItem isVisible={isVisible} delay="3" className="text-center">
          <MoreButton href={href} label={t.common.more} />
        </InviewItem>
      </div>
    </section>
  )
}
