export type Locale = 'vi' | 'en'

export const DEFAULT_LOCALE: Locale = 'vi'
export const LOCALE_STORAGE_KEY = 'pyropixel-locale'

export type TranslationKeys = {
  nav: {
    home: string
    games: string
    about: string
    jobs: string
  }
  lang: {
    switchToEn: string
    switchToVi: string
  }
  hero: {
    tagline: string
  }
  home: {
    gamesTitle: string
    gamesSubtitle: string
    aboutTitle: string
    aboutSubtitle: string
    jobsTitle: string
    jobsSubtitle: string
    gamesPreviewAlt: string
    aboutPreviewAlt: string
    jobsPreviewAlt: string
  }
  games: {
    title: string
    subtitle: string
    galaxyChronicleTitle: string
    galaxyChronicleSubtitle: string
    pageTitle: string
    pageSubtitle: string
    pageContent: string
    trailerTitle: string
    screenshotAlt: string
  }
  gameDetail: {
    screenshots: string
    platform: string
    releaseDate: string
    publisher: string
    genre: string
    players: string
    ratings: string
    viewOnSteam: string
    viewOnPlayStation: string
    viewOnNintendo: string
  }
  about: {
    title: string
    subtitle: string
    storyTitle: string
    storySubtitle: string
    storyContent: string
    valuesTitle: string
    valuesSubtitle: string
    valuesContent: string
    teamAlt: string
  }
  jobs: {
    title: string
    subtitle: string
    pageTitle: string
    pageSubtitle: string
    pageContent: string
    officeAlt: string
  }
  common: {
    more: string
    followUs: string
    privacyPolicy: string
    termsOfUse: string
    copyright: string
    top: string
    scrollToTop: string
    scrollToContent: string
    loading: string
    toggleMenu: string
  }
}
