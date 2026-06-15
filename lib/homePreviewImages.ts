export type PreviewSlide = {
  src: string
  alt: string
}

export type PreviewSlides = {
  desktop: PreviewSlide[]
  mobile: PreviewSlide[]
}

const SLIDER_DIR = '/videos/Slider'

const slide = (filename: string, alt: string): PreviewSlide => ({
  src: `${SLIDER_DIR}/${encodeURIComponent(filename)}`,
  alt,
})

const sliderSlides: PreviewSlide[] = [
  slide('582290225_798385386365728_2558834946497418310_n 3.png', 'PyroPixel Games'),
  slide('photo_2026-05-25_12-39-45 (2).jpg', 'PyroPixel Studio'),
  slide('photo_2026-05-25_12-46-18.jpg', 'PyroPixel Team'),
  slide('{21C07151-854A-46F4-BA11-367ADD65E655} 1.png', 'PyroPixel'),
]

export const homePreviewSlides: Record<'games' | 'about' | 'jobs', PreviewSlides> = {
  games: {
    desktop: sliderSlides,
    mobile: sliderSlides,
  },
  about: {
    desktop: sliderSlides,
    mobile: sliderSlides,
  },
  jobs: {
    desktop: sliderSlides,
    mobile: sliderSlides,
  },
}
