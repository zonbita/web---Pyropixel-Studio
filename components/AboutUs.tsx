'use client'

import BackgroundImage from './BackgroundImage'
import MoreButton from './MoreButton'
import { useLanguage } from '@/components/LanguageProvider'

export default function AboutUs() {
  const { t } = useLanguage()

  const teamImage = {
    src: '/videos/Slider/photo_2026-05-25_12-46-18.jpg',
    alt: t.about.teamAlt,
  }

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 overflow-hidden">
      <BackgroundImage src={teamImage.src} alt={teamImage.alt} overlay={true} />

      <div className="relative z-20 w-full mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="site-section-title mb-0 tracking-tight drop-shadow-lg uppercase">
            {t.about.title}
          </h2>
          <p className="site-section-subtitle mb-8 opacity-90 drop-shadow-md md:mb-12">
            {t.about.subtitle}
          </p>
        </div>

        <div className="text-center">
          <MoreButton href="#about" label={t.common.more} />
        </div>
      </div>
    </section>
  )
}
