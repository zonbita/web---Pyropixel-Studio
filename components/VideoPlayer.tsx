'use client'

import { useState, useRef, useEffect } from 'react'

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

export default function VideoPlayer({
  src,
  poster,
  className = '',
  autoplay = true,
  muted = true,
  loop = true,
  controls = false,
}: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoaded(true)
      setError(null)
      if (autoplay) {
        video.play().catch((err) => {
          console.error('Error playing video:', err)
          setError('Cannot autoplay video. Click to play.')
        })
      }
    }

    const handleError = () => {
      setError('Error loading video. Please check the file path.')
      console.error('Video error:', video.error)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)

    // Try to load video
    video.load()

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
    }
  }, [src, autoplay])

  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        poster={poster}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        preload="auto"
        onLoadedData={() => setIsLoaded(true)}
        onError={(e) => {
          console.error('Video load error:', e)
          setError('Failed to load video')
        }}
      >
        Your browser does not support the video tag.
      </video>
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="animate-pulse text-white/50">Loading video...</div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="text-white/70 text-center px-4">
            <p>{error}</p>
            <p className="text-sm mt-2 opacity-50">Video path: {src}</p>
          </div>
        </div>
      )}
    </div>
  )
}

