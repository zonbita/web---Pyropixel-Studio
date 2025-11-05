'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ImageItem {
  src: string
  alt: string
  width?: number
  height?: number
}

interface ImageGalleryProps {
  images: ImageItem[]
  columns?: 1 | 2 | 3 | 4
  className?: string
}

export default function ImageGallery({ images, columns = 3, className = '' }: ImageGalleryProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-3 md:gap-4 lg:gap-6 w-full ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-full aspect-[4/3] bg-gray-900 overflow-hidden group cursor-pointer"
        >
          {!loadedImages.has(index) && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-pulse text-white/30">Loading...</div>
            </div>
          )}
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
              loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setLoadedImages((prev) => new Set(prev).add(index))}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  )
}

