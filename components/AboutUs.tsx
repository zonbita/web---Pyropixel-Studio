'use client'

import BackgroundImage from './BackgroundImage'
import MoreButton from './MoreButton'
import { useLanguage } from '@/components/LanguageProvider'

export default function AboutUs() {
  const { t } = useLanguage()

  const teamImage = {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop',
    alt: t.about.teamAlt,
  }

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 bg-black overflow-hidden">
      <BackgroundImage src={teamImage.src} alt={teamImage.alt} overlay={true} />

      <div className="relative z-20 w-full mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight drop-shadow-lg">
            {t.about.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90 drop-shadow-md">
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
