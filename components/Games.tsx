import YouTubeVideo from './YouTubeVideo'
import ImageGallery from './ImageGallery'

export default function Games() {
  // Example video IDs - replace with your actual YouTube video IDs
  const featuredVideoId = 'dQw4w9WgXcQ' // Replace with your video ID
  
  // Example images - replace with your actual game images
  const gameImages = [
    {
      src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
      alt: 'Game Screenshot 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
      alt: 'Game Screenshot 2',
    },
    {
      src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
      alt: 'Game Screenshot 3',
    },
  ]

  return (
    <section id="games" className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-24 bg-black">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">GAMES</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90">CHECK OUT OUR WORK</p>
        </div>

        {/* Featured Video - Full Width */}
        <div className="mb-12 md:mb-16 w-full">
          <YouTubeVideo 
            videoId={featuredVideoId}
            title="Featured Game Trailer"
            className="w-full"
          />
        </div>

        {/* Game Screenshots Gallery - Full Width Grid */}
        <div className="mb-8 md:mb-12 w-full">
          <ImageGallery 
            images={gameImages}
            columns={3}
            className="w-full"
          />
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

