'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import { useLanguage } from '@/components/LanguageProvider'
import Logo from '@/components/Logo'

function isNavActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

interface NavLinkProps {
  href: string
  label: string
  pathname: string
  onClick?: () => void
  className?: string
}

function NavLink({ href, label, pathname, onClick, className = '' }: NavLinkProps) {
  const isActive = isNavActive(pathname, href)

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative inline-block pb-1 text-sm uppercase tracking-wider transition-colors drop-shadow-md hover:text-gray-300 ${
        isActive ? 'text-white' : ''
      } ${className}`}
    >
      {label}
      {isActive && (
        <span
          className="brand-gradient-line absolute bottom-0 left-0 h-0.5 w-full"
          aria-hidden="true"
        />
      )}
    </Link>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { isHidden, hasBackground } = useScrollHeader()
  const { locale, t, toggleLocale } = useLanguage()

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.games, href: '/games' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.jobs, href: '/jobs' },
  ]

  const languageLabel = locale === 'vi' ? t.lang.switchToEn : t.lang.switchToVi

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.1,0.75,0.4,0.95)] ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${hasBackground ? 'bg-[#111]/95 backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <div className="w-full mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="drop-shadow-lg">
            <Logo className="h-11 w-auto md:h-14" priority />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} pathname={pathname} />
            ))}
            <button
              type="button"
              onClick={toggleLocale}
              className="text-sm font-bold tracking-wider text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-opacity duration-300 hover:opacity-30"
            >
              {languageLabel}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label={t.common.toggleMenu}
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                pathname={pathname}
                onClick={() => setIsOpen(false)}
              />
            ))}
            <button
              type="button"
              onClick={() => {
                toggleLocale()
                setIsOpen(false)
              }}
              className="text-sm font-bold tracking-wider text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-opacity duration-300 hover:opacity-30 text-left"
            >
              {languageLabel}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
