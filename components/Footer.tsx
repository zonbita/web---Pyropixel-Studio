'use client'

import Image from 'next/image'
import { SOCIAL_LINKS } from '@/lib/socialLinks'
import { useLanguage } from '@/components/LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="site-footer" className="bg-black border-t border-white/10 py-12 px-6">
      <div className="w-full mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-6">{t.common.followUs}</h3>
          <ul className="flex justify-center gap-6 mb-8">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="block transition-opacity duration-300 hover:opacity-30"
                >
                  <Image
                    src={link.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="w-7 h-7"
                    unoptimized
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm opacity-70">
          <a href="#" className="hover:text-white transition-colors">
            {t.common.privacyPolicy}
          </a>
          <span className="hidden md:inline">•</span>
          <a href="#" className="hover:text-white transition-colors">
            {t.common.termsOfUse}
          </a>
        </div>

        <div className="text-center mt-8 text-sm opacity-50">
          ©{new Date().getFullYear()} {t.common.copyright}
        </div>
      </div>
    </footer>
  )
}
