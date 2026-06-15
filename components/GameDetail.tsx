'use client'

import { type ReactNode } from 'react'
import Image from 'next/image'
import VideoPlayer from '@/components/VideoPlayer'
import BackgroundImage from '@/components/BackgroundImage'
import { useInView } from '@/hooks/useInView'
import { useLanguage } from '@/components/LanguageProvider'
import type { Game } from '@/lib/games'

interface GameDetailProps {
  game: Game
}

function InviewBlock({
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

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="relative inline-block pb-4 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
      {children}
      <span
        className="absolute bottom-0 left-0 h-0.5 w-full"
        style={{
          background:
            'linear-gradient(90deg, rgb(0, 203, 240) 0%, rgb(200, 100, 250) 33%, rgb(255, 87, 64) 66%, rgb(255, 187, 0) 100%)',
        }}
      />
    </h2>
  )
}

function GameDetailHero({ game }: { game: Game }) {
  const { t } = useLanguage()

  const scrollToContent = () => {
    document.getElementById('game-description')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {game.heroVideo ? (
          <VideoPlayer
            src={game.heroVideo}
            poster={game.heroPoster}
            className="h-full w-full"
            autoplay
            muted
            loop
            controls={false}
          />
        ) : game.heroPoster ? (
          <BackgroundImage src={game.heroPoster} alt={game.title} overlay />
        ) : null}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div
        className="absolute z-10 flex w-full flex-col items-center justify-center px-5 text-center"
        style={{ top: '42vh' }}
      >
        <p className="hero-text-loaded text-4xl font-extrabold tracking-tight drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
          {game.title}
        </p>
      </div>

      <button
        type="button"
        onClick={scrollToContent}
        className="hero-text-loaded absolute bottom-8 left-1/2 z-10 -translate-x-1/2 cursor-pointer transition-opacity duration-300 hover:opacity-30 md:bottom-10"
        aria-label={t.common.scrollToContent}
      >
        <svg
          viewBox="0 0 40 22"
          className="h-5 w-10 stroke-white stroke-[4] fill-none md:h-6 md:w-12"
          aria-hidden="true"
        >
          <polyline points="2,2 20,20 38,2" />
        </svg>
      </button>
    </section>
  )
}

function GameDetailDescription({ game }: { game: Game }) {
  const { ref, isVisible } = useInView(0.2)
  const { locale } = useLanguage()

  return (
    <section
      id="game-description"
      ref={ref}
      className="relative flex min-h-[70vh] flex-col items-center justify-center bg-black px-6 py-20 md:px-12 md:py-32"
    >
      <InviewBlock isVisible={isVisible} delay="1" className="mx-auto max-w-4xl text-center">
        <p className="text-base leading-relaxed opacity-90 md:text-lg lg:text-xl">
          {game.description[locale]}
        </p>
      </InviewBlock>
    </section>
  )
}

function GameDetailScreenshots({ game }: { game: Game }) {
  const { ref, isVisible } = useInView(0.15)
  const { t } = useLanguage()

  if (game.screenshots.length === 0) return null

  return (
    <section
      ref={ref}
      className="relative bg-black px-6 py-20 md:px-12 md:py-32"
    >
      <InviewBlock isVisible={isVisible} delay="1" className="mb-10 text-center md:mb-16">
        <SectionTitle>{t.gameDetail.screenshots}</SectionTitle>
      </InviewBlock>

      <div className="game-screenshots-scroll mx-auto flex max-w-6xl snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:gap-6">
        {game.screenshots.map((shot, index) => (
          <InviewBlock
            key={shot.src}
            isVisible={isVisible}
            delay={index % 3 === 0 ? '1' : index % 3 === 1 ? '2' : '3'}
            className="w-[85vw] shrink-0 snap-center md:w-[70vw] lg:w-[55vw]"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 85vw, 55vw"
                unoptimized
              />
            </div>
          </InviewBlock>
        ))}
      </div>
    </section>
  )
}

function GameDetailMeta({ game }: { game: Game }) {
  const { ref, isVisible } = useInView(0.2)
  const { locale, t } = useLanguage()

  const items = [
    { label: t.gameDetail.platform, value: game.meta.platform[locale] },
    { label: t.gameDetail.releaseDate, value: game.meta.releaseDate },
    { label: t.gameDetail.publisher, value: game.meta.publisher[locale] },
    { label: t.gameDetail.genre, value: game.meta.genre[locale] },
    { label: t.gameDetail.players, value: game.meta.players },
    { label: t.gameDetail.ratings, value: game.meta.ratings[locale] },
  ]

  return (
    <section
      ref={ref}
      className="relative bg-black px-6 py-20 md:px-12 md:py-32"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 md:gap-y-14">
        {items.map((item, index) => (
          <InviewBlock
            key={item.label}
            isVisible={isVisible}
            delay={index % 3 === 0 ? '1' : index % 3 === 1 ? '2' : '3'}
          >
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-xs font-bold tracking-[0.2em] opacity-60 md:text-sm">
                {item.label}
              </h3>
              <p className="text-sm font-bold md:text-base">{item.value}</p>
            </div>
          </InviewBlock>
        ))}
      </div>
    </section>
  )
}

export default function GameDetail({ game }: GameDetailProps) {
  return (
    <>
      <GameDetailHero game={game} />
      <GameDetailDescription game={game} />
      <GameDetailScreenshots game={game} />
      <GameDetailMeta game={game} />
    </>
  )
}
