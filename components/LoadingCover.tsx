'use client'

import { useEffect, useState } from 'react'

interface LoadingCoverProps {
  onHidden?: () => void
}

export default function LoadingCover({ onHidden }: LoadingCoverProps) {
  const [isHidden, setIsHidden] = useState(false)
  const [isRemoved, setIsRemoved] = useState(false)

  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    const handleLoad = () => {
      setTimeout(() => {
        setIsHidden(true)
        document.body.classList.remove('overflow-hidden')

        setTimeout(() => {
          setIsRemoved(true)
          onHidden?.()
        }, 1100)
      }, 500)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
      document.body.classList.remove('overflow-hidden')
    }
  }, [onHidden])

  if (isRemoved) return null

  return (
    <div
      className={`fixed inset-0 z-[2000] pointer-events-none ${
        isHidden ? 'loading-cover-hide' : ''
      }`}
      aria-hidden="true"
    >
      <div className="loading-cover-bg absolute inset-0 bg-[#111]" />
      <div className="loading-cover-logo absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="loading-cover-pulse text-2xl font-extrabold tracking-wider md:text-4xl">
          <span className="bg-gradient-to-r from-[#00cbff] via-[#c864fa] to-[#ff574b] bg-clip-text text-transparent">
            PYROPIXEL
          </span>
        </p>
      </div>
    </div>
  )
}
