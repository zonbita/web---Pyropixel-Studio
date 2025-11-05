'use client'

import Image from 'next/image'
import { useState } from 'react'

interface BackgroundImageProps {
  src: string
  alt: string
  className?: string
  overlay?: boolean
}

export default function BackgroundImage({ 
  src, 
  alt, 
  className = '',
  overlay = true 
}: BackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        sizes="100vw"
        priority
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="animate-pulse text-white/30">Loading...</div>
        </div>
      )}
    </div>
  )
}

