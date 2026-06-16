'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SOCIAL_LINKS } from '@/lib/socialLinks'
import { useLanguage } from '@/components/LanguageProvider'
import Logo from '@/components/Logo'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="site-footer" className="bg-black border-t border-white/10 px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto grid w-full grid-rows-[auto_auto] gap-12 lg:gap-16">
        <div className="grid justify-items-center gap-8">
          <h3 className="brand-gradient-text relative inline-block pb-4 text-2xl font-bold">
            {t.common.followUs}
            <span
              className="brand-gradient-line absolute bottom-0 left-0 h-0.5 w-full"
              aria-hidden="true"
            />
          </h3>
          <ul className="grid grid-flow-col auto-cols-max gap-6">
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
                    className="h-7 w-7"
                    unoptimized
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-8 md:grid-cols-4 md:items-end">
          <div className="grid gap-4 justify-items-center text-center md:col-start-2">
            <Link href="/" className="inline-block transition-opacity duration-300 hover:opacity-70">
              <Logo className="h-10 w-auto" />
            </Link>
            <nav className="grid gap-1 text-sm opacity-70">
              <a href="#" className="transition-colors hover:text-white">
                {t.common.privacyPolicy}
                {'                    '}
                {t.common.termsOfUse}
              </a>
            </nav>
          </div>

          <p className="self-end text-center text-sm opacity-50 md:col-start-3 md:text-right">
            ©{new Date().getFullYear()} {t.common.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
