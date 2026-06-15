export type LocalizedText = {
  vi: string
  en: string
}

export type GameScreenshot = {
  src: string
  alt: string
}

export type GameMeta = {
  platform: LocalizedText
  releaseDate: string
  publisher: LocalizedText
  genre: LocalizedText
  players: string
  ratings: LocalizedText
}

export type Game = {
  slug: string
  title: string
  description: LocalizedText
  heroVideo?: string
  heroPoster?: string
  screenshots: GameScreenshot[]
  meta: GameMeta
  storeUrl?: string
}

const slider = (filename: string, alt: string): GameScreenshot => ({
  src: `/videos/Slider/${encodeURIComponent(filename)}`,
  alt,
})

export const GAMES: Game[] = [
  {
    slug: 'galaxy-chronicle',
    title: 'GALAXY CHRONICLE',
    description: {
      vi: 'Galaxy Chronicle là cuộc phiêu lưu khám phá vũ trụ đầy màu sắc, nơi bạn dẫn dắt phi hành đoàn qua hàng chục hành tinh, mở khóa sức mạnh mới và viết nên câu chuyện riêng giữa các thiên hà.',
      en: 'Galaxy Chronicle is a vibrant space exploration adventure. Lead your crew across dozens of planets, unlock new powers, and write your own story among the stars.',
    },
    heroVideo: '/videos/background.mp4',
    heroPoster: '/videos/illustration.jpg',
    screenshots: [
      slider('582290225_798385386365728_2558834946497418310_n 3.png', 'Galaxy Chronicle gameplay'),
      slider('photo_2026-05-25_12-39-45 (2).jpg', 'Galaxy Chronicle world'),
      slider('photo_2026-05-25_12-46-18.jpg', 'Galaxy Chronicle characters'),
      slider('{21C07151-854A-46F4-BA11-367ADD65E655} 1.png', 'Galaxy Chronicle scene'),
    ],
    meta: {
      platform: { vi: 'PC, Mobile', en: 'PC, Mobile' },
      releaseDate: '2026',
      publisher: { vi: 'Pyropixel Studio', en: 'Pyropixel Studio' },
      genre: { vi: 'Phiêu lưu, RPG', en: 'Adventure, RPG' },
      players: '1',
      ratings: { vi: 'Mọi lứa tuổi', en: 'Everyone' },
    },
    storeUrl: '#',
  },
]

export function getGameBySlug(slug: string): Game | undefined {
  return GAMES.find((game) => game.slug === slug)
}

export function getAllGameSlugs(): string[] {
  return GAMES.map((game) => game.slug)
}
