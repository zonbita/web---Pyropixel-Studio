'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isJapanese, setIsJapanese] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Games', href: '#games' },
    { label: 'About Us', href: '#about' },
    { label: 'Jobs', href: '#jobs' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            PYROPIXEL STUDIO
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setIsJapanese(!isJapanese)}
              className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors"
            >
              {isJapanese ? 'English' : '日本語'}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsJapanese(!isJapanese)
                setIsOpen(false)
              }}
              className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors text-left"
            >
              {isJapanese ? 'English' : '日本語'}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

