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
    pageTitle: string
    pageSubtitle: string
    pageContent: string
    trailerTitle: string
    screenshotAlt: string
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

export const translations: Record<Locale, TranslationKeys> = {
  vi: {
    nav: {
      home: 'Trang chủ',
      games: 'Trò chơi',
      about: 'Về chúng tôi',
      jobs: 'Tuyển dụng',
    },
    lang: {
      switchToEn: 'English',
      switchToVi: 'Tiếng Việt',
    },
    hero: {
      tagline: 'CHÚNG TÔI YÊU THÍCH TRÒ CHƠI!',
    },
    home: {
      gamesTitle: 'TRÒ CHƠI',
      gamesSubtitle: 'KHÁM PHÁ SẢN PHẨM',
      aboutTitle: 'VỀ CHÚNG TÔI',
      aboutSubtitle: 'GẶP GỠ ĐỘI NGŨ',
      jobsTitle: 'TUYỂN DỤNG',
      jobsSubtitle: 'THAM GIA CÙNG CHÚNG TÔI',
      gamesPreviewAlt: 'Xem trước trò chơi',
      aboutPreviewAlt: 'Xem trước về chúng tôi',
      jobsPreviewAlt: 'Xem trước tuyển dụng',
    },
    games: {
      title: 'TRÒ CHƠI',
      subtitle: 'KHÁM PHÁ SẢN PHẨM',
      pageTitle: 'TRÒ CHƠI CỦA CHÚNG TÔI',
      pageSubtitle: 'Khám phá danh mục game',
      pageContent: 'Khám phá những tựa game tuyệt vời mà chúng tôi đã tạo ra.',
      trailerTitle: 'Trailer game nổi bật',
      screenshotAlt: 'Ảnh chụp game',
    },
    about: {
      title: 'VỀ CHÚNG TÔI',
      subtitle: 'GẶP GỠ ĐỘI NGŨ',
      storyTitle: 'CÂU CHUYỆN',
      storySubtitle: 'Cùng nhau tạo nên trải nghiệm tuyệt vời',
      storyContent:
        'Chúng tôi là đội ngũ đam mê, luôn nỗ lực tạo ra những trải nghiệm sáng tạo và hấp dẫn.',
      valuesTitle: 'GIÁ TRỊ CỐT LÕI',
      valuesSubtitle: 'Điều thúc đẩy chúng tôi',
      valuesContent:
        'Sự xuất sắc, sáng tạo và hợp tác là trái tim của mọi điều chúng tôi làm.',
      teamAlt: 'Đội ngũ của chúng tôi',
    },
    jobs: {
      title: 'TUYỂN DỤNG',
      subtitle: 'THAM GIA CÙNG CHÚNG TÔI',
      pageTitle: 'VỊ TRÍ TUYỂN DỤNG',
      pageSubtitle: 'Gia nhập đội ngũ',
      pageContent: 'Chúng tôi luôn tìm kiếm những tài năng để cùng phát triển.',
      officeAlt: 'Không gian văn phòng',
    },
    common: {
      more: 'Xem thêm',
      followUs: 'THEO DÕI',
      privacyPolicy: 'Chính sách bảo mật',
      termsOfUse: 'Điều khoản sử dụng',
      copyright: 'Pyropixel Studio. Bảo lưu mọi quyền.',
      top: 'Top',
      scrollToTop: 'Cuộn lên đầu trang',
      scrollToContent: 'Cuộn xuống nội dung',
      loading: 'Đang tải...',
      toggleMenu: 'Mở menu',
    },
  },
  en: {
    nav: {
      home: 'Home',
      games: 'Games',
      about: 'About Us',
      jobs: 'Jobs',
    },
    lang: {
      switchToEn: 'English',
      switchToVi: 'Tiếng Việt',
    },
    hero: {
      tagline: "WE'RE ALL ABOUT PLAY!",
    },
    home: {
      gamesTitle: 'GAMES',
      gamesSubtitle: 'CHECK OUT OUR WORK',
      aboutTitle: 'ABOUT US',
      aboutSubtitle: 'MEET THE TEAM',
      jobsTitle: 'JOBS',
      jobsSubtitle: 'JOIN US',
      gamesPreviewAlt: 'Games preview',
      aboutPreviewAlt: 'About us preview',
      jobsPreviewAlt: 'Jobs preview',
    },
    games: {
      title: 'GAMES',
      subtitle: 'CHECK OUT OUR WORK',
      pageTitle: 'OUR GAMES',
      pageSubtitle: 'Explore our game portfolio',
      pageContent: "Discover the amazing games we've created.",
      trailerTitle: 'Featured Game Trailer',
      screenshotAlt: 'Game screenshot',
    },
    about: {
      title: 'ABOUT US',
      subtitle: 'MEET THE TEAM',
      storyTitle: 'OUR STORY',
      storySubtitle: 'Building amazing experiences together',
      storyContent:
        'We are a passionate team dedicated to creating innovative and engaging experiences.',
      valuesTitle: 'OUR VALUES',
      valuesSubtitle: 'What drives us',
      valuesContent:
        'Excellence, creativity, and collaboration are at the heart of everything we do.',
      teamAlt: 'Our team',
    },
    jobs: {
      title: 'JOBS',
      subtitle: 'JOIN US',
      pageTitle: 'OPEN POSITIONS',
      pageSubtitle: 'Join our team',
      pageContent: "We're always looking for talented individuals to join our team.",
      officeAlt: 'Office space',
    },
    common: {
      more: 'More',
      followUs: 'FOLLOW US',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      copyright: 'Pyropixel Studio. All Rights Reserved.',
      top: 'Top',
      scrollToTop: 'Scroll to top',
      scrollToContent: 'Scroll to content',
      loading: 'Loading...',
      toggleMenu: 'Toggle menu',
    },
  },
}
