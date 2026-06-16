'use client'

import Navigation from '@/components/Navigation'
import SectionPreview from '@/components/SectionPreview'
import Footer from '@/components/Footer'
import { useLanguage } from '@/components/LanguageProvider'
import { allGamesSlides, homePreviewSlides } from '@/lib/homePreviewImages'

export default function GamesPage() {
  const { t } = useLanguage()

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navigation />
      <SectionPreview
        id="games"
        title={t.games.title}
        subtitle={t.games.subtitle}
        href="#galaxy-chronicle"
        slides={allGamesSlides}
      />
      <SectionPreview
        id="galaxy-chronicle"
        title={t.home.gamesSubtitle}
        subtitle={t.home.gamesTitle}
        href="/games/galaxy-chronicle"
        slides={homePreviewSlides.games}
      />
      <SectionPreview
        id="the-junk-squad"
        title={t.home.aboutTitle}
        subtitle={t.home.aboutSubtitle}
        href="/games/the-junk-squad"
        slides={homePreviewSlides.junkSquad}
      />
      <Footer />
    </main>
  )
}
