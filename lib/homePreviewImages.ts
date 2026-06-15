export type PreviewSlide = {
  src: string
  alt: string
}

export type PreviewSlides = {
  desktop: PreviewSlide[]
  mobile: PreviewSlide[]
}

const S3 = 'https://s3.teamasobi.com/site'

export const homePreviewSlides: Record<'games' | 'about' | 'jobs', PreviewSlides> = {
  games: {
    desktop: [
      { src: `${S3}/_pc169retina/astro-bot-b_2024-06-04-053750_whkd.jpg`, alt: 'Astro Bot' },
      { src: `${S3}/_pc169retina/ASTRO-PLAYROOM_KV_TEST2@2x.jpg`, alt: "Astro's Playroom" },
      { src: `${S3}/_pc169retina/astro-bot-rescue-mission_KV_TEST@2x.jpg`, alt: 'Astro Bot Rescue Mission' },
    ],
    mobile: [
      { src: `${S3}/_sp916retina/5915/MasterImage_1440x2160_R-copy_2024-06-04-034618_jclg.jpg`, alt: 'Astro Bot' },
      { src: `${S3}/_sp916retina/Home-game-sp-01-2x.jpg`, alt: "Astro's Playroom" },
      { src: `${S3}/_sp916retina/ASTRO-BOT-Rescue-Mission-mv-sp-V01-2x.jpg`, alt: 'Astro Bot Rescue Mission' },
    ],
  },
  about: {
    desktop: [
      { src: `${S3}/_pc169retina/home_about_pc_04-2@2x.jpg`, alt: 'Team' },
      { src: `${S3}/_pc169retina/home_about_pc_02-2@2x.jpg`, alt: 'Studio' },
      { src: `${S3}/_pc169retina/home_about_pc_03-2@2x.jpg`, alt: 'Office' },
    ],
    mobile: [
      { src: `${S3}/_sp916retina/Home-about-sp-02-2x_2021-07-13-081952_eaxd.jpg`, alt: 'Team' },
      { src: `${S3}/_sp916retina/Home-about-sp-03-V3-2x.jpg`, alt: 'Studio' },
      { src: `${S3}/_sp916retina/Home-about-sp-04-v4-2x.jpg`, alt: 'Office' },
    ],
  },
  jobs: {
    desktop: [
      { src: `${S3}/_pc169retina/home_jobs_pc_04-2@2x.jpg`, alt: 'Jobs' },
      { src: `${S3}/_pc169retina/home_jobs_pc_03@2x.jpg`, alt: 'Careers' },
      { src: `${S3}/_pc169retina/home_jobs_pc_01-2@2x.jpg`, alt: 'Join us' },
    ],
    mobile: [
      { src: `${S3}/_sp916retina/Home-jobs-sp-01-2x.jpg`, alt: 'Jobs' },
      { src: `${S3}/_sp916retina/Home-jobs-sp-04v02-2x.jpg`, alt: 'Careers' },
      { src: `${S3}/_sp916retina/Home-jobs-sp-03-v3-2x.jpg`, alt: 'Join us' },
    ],
  },
}
