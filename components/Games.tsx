'use client'

import YouTubeVideo from './YouTubeVideo'
import BackgroundImage from './BackgroundImage'
import MoreButton from './MoreButton'
import { useLanguage } from '@/components/LanguageProvider'

export default function Games() {
  const { t } = useLanguage()
  const videoId = 'dQw4w9WgXcQ'

  const gameImage = {
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&h=900&fit=crop',
    alt: t.games.screenshotAlt,
  }

  return (
    <section id="games" className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 bg-black overflow-hidden">
      {videoId ? (
        <div className="absolute inset-0 z-0">
          <YouTubeVideo
            videoId={videoId}
            title={t.games.trailerTitle}
            className="w-full h-full"
            autoplay={true}
            muted={true}
            loop={true}
            controls={false}
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
      ) : (
        <BackgroundImage src={gameImage.src} alt={gameImage.alt} overlay={true} />
      )}

      <div className="relative z-20 w-full mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight drop-shadow-lg">
            {t.games.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90 drop-shadow-md">
            {t.games.subtitle}
          </p>
        </div>

        <div className="text-center">
          <MoreButton href="/games/galaxy-chronicle" label={t.common.more} />
        </div>
      </div>
    </section>
  )
}
