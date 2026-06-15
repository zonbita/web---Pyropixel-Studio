'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { SOCIAL_LINKS } from '@/lib/socialLinks'

function useSidebarVisibility(sidebarRef: React.RefObject<HTMLElement | null>) {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      const sidebar = sidebarRef.current
      const footer = document.getElementById('site-footer')
      if (!sidebar || !footer) return

      const sidebarTop = sidebar.getBoundingClientRect().top + window.scrollY
      const footerTop = footer.getBoundingClientRect().top + window.scrollY
      setIsHidden(sidebarTop > footerTop)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [sidebarRef])

  return isHidden
}

export default function SocialSidebar() {
  const sidebarRef = useRef<HTMLUListElement>(null)
  const isHidden = useSidebarVisibility(sidebarRef)

  return (
    <ul
      ref={sidebarRef}
      id="sns"
      className={`hidden lg:block fixed right-[30px] top-1/2 z-[999] -translate-y-1/2 transition-opacity duration-200 ${
        isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Social media links"
    >
      {SOCIAL_LINKS.map((link) => (
        <li key={link.label} className="mb-[30px] last:mb-0">
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="block text-center transition-opacity duration-300 ease-[cubic-bezier(0.1,0.75,0.4,0.95)] hover:opacity-30"
          >
            <Image
              src={link.icon}
              alt=""
              width={28}
              height={28}
              className="mx-auto w-7 h-7"
              unoptimized
            />
          </a>
        </li>
      ))}
    </ul>
  )
}
