'use client'

import { useState } from 'react'

interface YouTubeVideoProps {
  videoId: string
  title?: string
  className?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

export default function YouTubeVideo({ 
  videoId, 
  title, 
  className = '',
  autoplay = true,
  muted = false,
  loop = true,
  controls = true,
}: YouTubeVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    ...(autoplay && { autoplay: '1' }),
    ...(muted && { mute: '1' }),
    ...(loop && { loop: '1', playlist: videoId }),
    ...(!controls && { controls: '0' }),
  })

  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full h-full bg-black overflow-hidden" style={{ width: '100%', height: '100%' }}>
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="animate-pulse text-white/50">Loading...</div>
          </div>
        )}
        <iframe
          className="absolute inset-0 w-full h-full"
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'cover'
          }}
          src={`https://www.youtube.com/embed/${videoId}?${params.toString()}`}
          title={title || 'YouTube video player'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  )
}

