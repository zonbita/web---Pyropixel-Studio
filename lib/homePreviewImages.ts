export type PreviewSlide = {
  src: string
  alt: string
}

const SLIDER_DIR = '/videos/Slider'

const slide = (filename: string, alt: string): PreviewSlide => ({
  src: `${SLIDER_DIR}/${encodeURIComponent(filename)}`,
  alt,
})

export const homePreviewSlides = {
  games: [
    slide('582290225_798385386365728_2558834946497418310_n 3.png', 'Galaxy Chronicle: Echoes of Stearone'),
  ],
  junkSquad: [
    slide(
      'gpt-image-2_A_gritty_post-apocalyptic_scene_from_the_game_Back_4_Blood_with_four_survivors_s-0.jpg',
      'The Junk Squad',
    ),
  ],
  about: [
    slide('photo_2026-05-25_12-46-18.jpg', 'PyroPixel Team'),
  ],
  jobs: [
    slide('photo_2026-05-25_12-46-18.jpg', 'PyroPixel Team'),
  ],
} as const satisfies Record<'games' | 'junkSquad' | 'about' | 'jobs', PreviewSlide[]>

export const allGamesSlides: PreviewSlide[] = [
  ...homePreviewSlides.games,
  ...homePreviewSlides.junkSquad,
]

export type HomePreviewSection = keyof typeof homePreviewSlides
