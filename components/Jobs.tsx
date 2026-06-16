'use client'

import BackgroundImage from './BackgroundImage'
import MoreButton from './MoreButton'
import { useLanguage } from '@/components/LanguageProvider'

export default function Jobs() {
  const { t } = useLanguage()

  const officeImage = {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop',
    alt: t.jobs.officeAlt,
  }

  return (
    <section id="jobs" className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 overflow-hidden">
      <BackgroundImage src={officeImage.src} alt={officeImage.alt} overlay={true} />

      <div className="relative z-20 w-full mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="site-section-title mb-0 tracking-tight drop-shadow-lg">
            {t.jobs.title}
          </h2>
          <p className="site-section-subtitle mb-8 opacity-90 drop-shadow-md md:mb-12">
            {t.jobs.subtitle}
          </p>
        </div>

        <div className="text-center">
          <MoreButton href="#jobs" label={t.common.more} />
        </div>
      </div>
    </section>
  )
}
