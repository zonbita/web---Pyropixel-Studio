# Pyropixel Studio

A modern Next.js website inspired by Team Asobi's design, featuring a clean, minimalist aesthetic with smooth scrolling sections.

## Features

- **Modern Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** for all devices
- **Smooth Scrolling** navigation
- **Language Toggle** (English/Japanese)
- **YouTube Video Integration** for game trailers and background videos
- **Image Gallery** with Next.js Image optimization
- **Hover Effects** and smooth transitions

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero section (with optional background video)
│   ├── YouTubeVideo.tsx # YouTube video embed component
│   ├── ImageGallery.tsx # Responsive image gallery component
│   ├── Games.tsx       # Games section (with videos & images)
│   ├── AboutUs.tsx     # About Us section (with team images)
│   ├── Jobs.tsx        # Jobs section (with office images)
│   └── Footer.tsx      # Footer
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## Adding Your Own Content

### YouTube Videos

To add YouTube videos, update the `videoId` in the components:

1. **Games Section** (`components/Games.tsx`):
   ```tsx
   const featuredVideoId = 'YOUR_VIDEO_ID' // Replace with your YouTube video ID
   ```

2. **Hero Background** (`components/Hero.tsx`):
   ```tsx
   const backgroundVideoId = 'YOUR_VIDEO_ID' // Optional background video
   ```

To get a YouTube video ID, look at the URL: `https://www.youtube.com/watch?v=VIDEO_ID`

### Images

Replace the example images in each component:

1. **Games Section** (`components/Games.tsx`): Update `gameImages` array
2. **About Us Section** (`components/AboutUs.tsx`): Update `teamImages` array
3. **Jobs Section** (`components/Jobs.tsx`): Update `officeImages` array

You can use:
- External URLs (ensure they're added to `next.config.js` remotePatterns)
- Local images in `public/` folder (use `/image-name.jpg`)

Example:
```tsx
const gameImages = [
  {
    src: '/images/game1.jpg', // Local image
    alt: 'Game Screenshot 1',
  },
  {
    src: 'https://your-domain.com/image.jpg', // External image
    alt: 'Game Screenshot 2',
  },
]
```

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
