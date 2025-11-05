import YouTubeVideo from './YouTubeVideo'
import SingleImage from './SingleImage'

export default function Games() {
  // Choose either video OR image - comment out the one you don't want to use
  
  // Option 1: YouTube Video
  const videoId = 'dQw4w9WgXcQ' // Replace with your video ID or set to '' to disable
  
  // Option 2: Single Image
  const gameImage = {
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&h=900&fit=crop',
    alt: 'Game Screenshot',
  }

  return (
    <section id="games" className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 bg-black">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">GAMES</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90">CHECK OUT OUR WORK</p>
        </div>

        {/* Single Media - Video or Image */}
        <div className="mb-8 md:mb-12 w-full">
          {videoId ? (
            <YouTubeVideo 
              videoId={videoId}
              title="Featured Game Trailer"
              className="w-full"
            />
          ) : (
            <SingleImage 
              src={gameImage.src}
              alt={gameImage.alt}
              className="w-full"
            />
          )}
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

