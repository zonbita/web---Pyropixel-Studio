import YouTubeVideo from './YouTubeVideo'
import BackgroundImage from './BackgroundImage'

export default function Games() {
  // Choose either video OR image background
  
  // Option 1: YouTube Video Background
  const videoId = 'dQw4w9WgXcQ' // Replace with your video ID or set to '' to disable
  
  // Option 2: Background Image
  const gameImage = {
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&h=900&fit=crop',
    alt: 'Game Screenshot',
  }

  return (
    <section id="games" className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 bg-black overflow-hidden">
      {/* Background - Video or Image */}
      {videoId ? (
        <div className="absolute inset-0 z-0">
          <YouTubeVideo 
            videoId={videoId}
            title="Featured Game Trailer"
            className="w-full h-full"
            autoplay={true}
            muted={true}
            loop={true}
            controls={false}
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
      ) : (
        <BackgroundImage 
          src={gameImage.src}
          alt={gameImage.alt}
          overlay={true}
        />
      )}

      {/* Content */}
      <div className="relative z-20 w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight drop-shadow-lg">GAMES</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90 drop-shadow-md">CHECK OUT OUR WORK</p>
        </div>

        {/* More Button */}
        <div className="text-center">
          <a
            href="#games"
            className="inline-block px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm"
          >
            More
          </a>
        </div>
      </div>
    </section>
  )
}

