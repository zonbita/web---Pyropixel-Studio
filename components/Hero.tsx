import YouTubeVideo from './YouTubeVideo'

export default function Hero() {
  // Optional: Add a background video ID for hero section
  // Set to null or empty string to disable background video
  const backgroundVideoId = '' // Add your YouTube video ID here for background

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Optional Background Video */}
      {backgroundVideoId && (
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <YouTubeVideo 
            videoId={backgroundVideoId}
            className="w-full h-full"
            autoplay={true}
            muted={true}
            loop={true}
            controls={false}
          />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
          WE&apos;RE ALL ABOUT PLAY!
        </h1>
        <div className="text-xl md:text-2xl mb-12 opacity-90">
          PYROPIXEL STUDIO
        </div>
      </div>
    </section>
  )
}

