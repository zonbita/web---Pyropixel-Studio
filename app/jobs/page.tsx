'use client'

import Navigation from '@/components/Navigation'
import Jobs from '@/components/Jobs'
import ContentSection from '@/components/ContentSection'
import Footer from '@/components/Footer'
import { useLanguage } from '@/components/LanguageProvider'

export default function JobsPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen text-white relative">
      <Navigation />
      <Jobs />
      <ContentSection
        title={t.jobs.pageTitle}
        subtitle={t.jobs.pageSubtitle}
        content={
          <div className="text-center">
            <p className="text-lg opacity-75 mb-8">{t.jobs.pageContent}</p>
          </div>
        }
      />
      <Footer />
    </main>
  )
}
