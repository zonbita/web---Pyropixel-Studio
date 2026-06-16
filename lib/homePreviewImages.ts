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
    slide('{21C07151-854A-46F4-BA11-367ADD65E655} 1.png', 'Galaxy Chronicle: Echoes of Stearone'),
  ],
  about: [
    slide('gpt-image-2_A_gritty_post-apocalyptic_scene_from_the_game_Back_4_Blood_with_a_group_of_four_-0.jpg', 'The Junk Squad'),
    slide('gpt-image-2_A_gritty_post-apocalyptic_scene_from_the_game_Back_4_Blood_with_four_survivors_s-0.jpg', 'The Junk Squad'),
  ],
  jobs: [
    slide('photo_2026-05-25_12-46-18.jpg', 'PyroPixel Team'),
  ],
} as const satisfies Record<'games' | 'about' | 'jobs', PreviewSlide[]>

export const allGamesSlides: PreviewSlide[] = [
  ...homePreviewSlides.games,
  ...homePreviewSlides.about,
]

export type HomePreviewSection = keyof typeof homePreviewSlides
