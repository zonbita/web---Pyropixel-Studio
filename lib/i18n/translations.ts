import { en } from '@/lib/i18n/en'
import { vi } from '@/lib/i18n/vi'
import type { Locale, TranslationKeys } from '@/lib/i18n/types'

export type { Locale, TranslationKeys } from '@/lib/i18n/types'
export { DEFAULT_LOCALE, LOCALE_STORAGE_KEY } from '@/lib/i18n/types'

export const translations: Record<Locale, TranslationKeys> = {
  vi,
  en,
}
