'use client'

import Navigation from '@/components/Navigation'
import Games from '@/components/Games'
import ContentSection from '@/components/ContentSection'
import Footer from '@/components/Footer'
import { useLanguage } from '@/components/LanguageProvider'

export default function GamesPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navigation />
      <Games />
      <ContentSection
        title={t.games.pageTitle}
        subtitle={t.games.pageSubtitle}
        content={
          <div className="text-center">
            <p className="text-lg opacity-75 mb-8">{t.games.pageContent}</p>
          </div>
        }
      />
      <Footer />
    </main>
  )
}
