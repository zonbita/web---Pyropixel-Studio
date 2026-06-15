'use client'

import Navigation from '@/components/Navigation'
import AboutUs from '@/components/AboutUs'
import ContentSection from '@/components/ContentSection'
import Footer from '@/components/Footer'
import { useLanguage } from '@/components/LanguageProvider'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navigation />
      <AboutUs />
      <ContentSection
        title={t.about.storyTitle}
        subtitle={t.about.storySubtitle}
        content={
          <div className="text-center">
            <p className="text-lg opacity-75 mb-8">{t.about.storyContent}</p>
          </div>
        }
      />
      <ContentSection
        title={t.about.valuesTitle}
        subtitle={t.about.valuesSubtitle}
        content={
          <div className="text-center">
            <p className="text-lg opacity-75">{t.about.valuesContent}</p>
          </div>
        }
      />
      <Footer />
    </main>
  )
}
