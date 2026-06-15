'use client'

import { ReactNode } from 'react'
import { LanguageProvider } from '@/components/LanguageProvider'
import SocialSidebar from '@/components/SocialSidebar'
import ScrollToTop from '@/components/ScrollToTop'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <SocialSidebar />
      <ScrollToTop />
    </LanguageProvider>
  )
}
