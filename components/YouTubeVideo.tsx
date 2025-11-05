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
  autoplay = false,
  muted = false,
  loop = false,
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
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full aspect-video bg-black overflow-hidden rounded-sm">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="animate-pulse text-white/50">Loading...</div>
          </div>
        )}
        <iframe
          className="absolute inset-0 w-full h-full"
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

