'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import LoadingCover from '@/components/LoadingCover'
import SectionPreview from '@/components/SectionPreview'
import Footer from '@/components/Footer'
import { useLanguage } from '@/components/LanguageProvider'
import { homePreviewSlides } from '@/lib/homePreviewImages'

export default function Home() {
  const [isPageReady, setIsPageReady] = useState(false)
  const { t } = useLanguage()

  return (
    <main className="min-h-screen text-white relative">
      <LoadingCover onHidden={() => setIsPageReady(true)} />
      <Navigation />
      <Hero isPageReady={isPageReady} />
      <SectionPreview
        id="games-preview"
        title={t.home.gamesTitle}
        subtitle={t.home.gamesSubtitle}
        href="/games"
        slides={homePreviewSlides.games}
        homeTypography
      />
      <SectionPreview
        title={t.about.title}
        subtitle={t.about.subtitle}
        href="/about"
        slides={homePreviewSlides.about}
        homeTypography
      />
      <SectionPreview
        title={t.home.jobsTitle}
        subtitle={t.home.jobsSubtitle}
        href="/jobs"
        slides={homePreviewSlides.jobs}
        homeTypography
      />
      <Footer />
    </main>
  )
}
