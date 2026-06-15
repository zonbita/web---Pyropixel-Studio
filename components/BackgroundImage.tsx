'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'

interface BackgroundImageProps {
  src: string
  alt: string
  className?: string
  overlay?: boolean
  inView?: boolean
}

export default function BackgroundImage({
  src,
  alt,
  className = '',
  overlay = true,
  inView,
}: BackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useLanguage()
  const isVisible = isLoaded && (inView !== undefined ? inView : true)

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-[1500ms] ease-[cubic-bezier(0.1,0.75,0.4,0.95)] ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        sizes="100vw"
        priority
      />
      {overlay && <div className="absolute inset-0 bg-black/40" />}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="animate-pulse text-white/30">{t.common.loading}</div>
        </div>
      )}
    </div>
  )
}
