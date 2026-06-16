'use client'

import { type ReactNode, useCallback, useEffect, useState } from 'react'
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
      className="relative flex min-h-screen flex-col items-center justify-center bg-black px-6 py-20 md:px-12"
    >
      <InviewBlock isVisible={isVisible} delay="1" className="mx-auto max-w-4xl text-center">
        {game.logoImage && (
          <div className="relative mx-auto mb-10 h-40 w-full max-w-3xl md:mb-12 md:h-56 lg:h-64">
            <Image
              src={game.logoImage}
              alt={game.logoAlt ?? game.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 768px"
              unoptimized
            />
          </div>
        )}
        <p className="text-base leading-relaxed opacity-90 md:text-lg lg:text-xl">
          {game.description[locale]}
        </p>
      </InviewBlock>
    </section>
  )
}

function ScreenshotNavButton({
  direction,
  onClick,
  label,
}: {
  direction: 'prev' | 'next'
  onClick: () => void
  label: string
}) {
  const positionClass = direction === 'prev' ? 'left-4 md:left-8' : 'right-4 md:right-8'

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 z-10 ${positionClass} -translate-y-1/2 rounded-full border border-white/40 bg-black/40 p-3 text-white transition-opacity duration-300 hover:opacity-60 md:p-4`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current stroke-[2] md:h-6 md:w-6"
        aria-hidden="true"
      >
        {direction === 'prev' ? (
          <polyline points="15,4 7,12 15,20" />
        ) : (
          <polyline points="9,4 17,12 9,20" />
        )}
      </svg>
    </button>
  )
}

function GameDetailScreenshots({ game }: { game: Game }) {
  const { locale } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const screenshots = game.screenshots
  const total = screenshots.length

  const goToPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + total) % total)
  }, [total])

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % total)
  }, [total])

  useEffect(() => {
    if (total <= 1) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goToPrevious()
      if (event.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrevious, total])

  if (total === 0) return null

  const previousLabel = locale === 'vi' ? 'Ảnh trước' : 'Previous image'
  const nextLabel = locale === 'vi' ? 'Ảnh sau' : 'Next image'

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {screenshots.map((shot, index) => (
        <div
          key={shot.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === activeIndex}
            unoptimized
          />
        </div>
      ))}

      {total > 1 && (
        <>
          <ScreenshotNavButton direction="prev" onClick={goToPrevious} label={previousLabel} />
          <ScreenshotNavButton direction="next" onClick={goToNext} label={nextLabel} />
        </>
      )}
    </section>
  )
}

function StoreLinkButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center justify-between border-2 border-[#d3410b] px-4 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#d3410b] md:px-5 md:py-4 md:text-base"
    >
      <span>{label}</span>
      <span className="pl-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
        &gt;
      </span>
    </a>
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

  const storeLinks = [
    { href: game.stores.steam, label: t.gameDetail.viewOnSteam },
    { href: game.stores.playstation, label: t.gameDetail.viewOnPlayStation },
    { href: game.stores.nintendo, label: t.gameDetail.viewOnNintendo },
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

      <InviewBlock isVisible={isVisible} delay="3" className="mx-auto mt-14 max-w-5xl md:mt-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {storeLinks.map((store) => (
            <StoreLinkButton key={store.label} href={store.href} label={store.label} />
          ))}
        </div>
      </InviewBlock>
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
