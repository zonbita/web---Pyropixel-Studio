'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollHeader() {
  const [isHidden, setIsHidden] = useState(false)
  const [hasBackground, setHasBackground] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setHasBackground(currentScrollY >= 1)

      if (currentScrollY >= 1 && currentScrollY >= lastScrollY.current) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isHidden, hasBackground }
}
