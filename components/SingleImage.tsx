'use client'

import Image from 'next/image'
import { useState } from 'react'

interface SingleImageProps {
  src: string
  alt: string
  className?: string
}

export default function SingleImage({ src, alt, className = '' }: SingleImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative w-full aspect-video bg-gray-900 overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse text-white/30">Loading...</div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        sizes="100vw"
      />
    </div>
  )
}

