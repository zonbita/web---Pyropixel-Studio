'use client'

import { type ReactNode } from 'react'
import Link from 'next/link'
import BackgroundImage from './BackgroundImage'
import { useInView } from '@/hooks/useInView'

interface SectionPreviewProps {
  id?: string
  title: string
  subtitle: string
  href: string
  image: {
    src: string
    alt: string
  }
}

function InviewItem({
  isVisible,
  delay,
  children,
  className = '',
}: {
  isVisible: boolean
  delay: '1' | '2' | '3'
  children: React.ReactNode
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

export default function SectionPreview({ id, title, subtitle, href, image }: SectionPreviewProps) {
  const { ref, isVisible } = useInView(0.2)

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 bg-black overflow-hidden"
    >
      <BackgroundImage src={image.src} alt={image.alt} overlay={true} inView={isVisible} />

      <div className="relative z-20 w-full mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <InviewItem isVisible={isVisible} delay="1">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight drop-shadow-lg">
              {title}
            </h2>
          </InviewItem>
          <InviewItem isVisible={isVisible} delay="2">
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90 drop-shadow-md">
              {subtitle}
            </p>
          </InviewItem>
        </div>

        <InviewItem isVisible={isVisible} delay="3" className="text-center">
          <Link
            href={href}
            className="inline-block px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm"
          >
            More
          </Link>
        </InviewItem>
      </div>
    </section>
  )
}
