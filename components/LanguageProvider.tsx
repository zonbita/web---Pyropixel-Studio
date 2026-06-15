'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  Locale,
  TranslationKeys,
  translations,
} from '@/lib/i18n/translations'

interface LanguageContextValue {
  locale: Locale
  t: TranslationKeys
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
  return stored === 'en' || stored === 'vi' ? stored : DEFAULT_LOCALE
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    setLocaleState(readStoredLocale())
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => (current === 'vi' ? 'en' : 'vi'))
  }, [])

  const value = useMemo(
    () => ({
      locale,
      t: translations[locale],
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
