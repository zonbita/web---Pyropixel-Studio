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
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 md:mb-8 tracking-tight drop-shadow-lg">
            {t.jobs.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90 drop-shadow-md">
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
