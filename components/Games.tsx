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
    <section id="games" className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">GAMES</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">CHECK OUT OUR WORK</p>
        </div>

        {/* Featured Video */}
        <div className="mb-16">
          <YouTubeVideo 
            videoId={featuredVideoId}
            title="Featured Game Trailer"
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Game Screenshots Gallery */}
        <div className="mb-12">
          <ImageGallery 
            images={gameImages}
            columns={3}
          />
        </div>

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

