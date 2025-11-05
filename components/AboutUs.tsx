import ImageGallery from './ImageGallery'

export default function AboutUs() {
  // Example team images - replace with your actual team photos
  const teamImages = [
    {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      alt: 'Team Member 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      alt: 'Team Member 2',
    },
    {
      src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      alt: 'Team Member 3',
    },
    {
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
      alt: 'Team Member 4',
    },
  ]

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-24 bg-black">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">ABOUT US</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90">MEET THE TEAM</p>
        </div>

        {/* Team Images - Full Width Grid */}
        <div className="mb-8 md:mb-12 w-full">
          <ImageGallery 
            images={teamImages}
            columns={4}
            className="w-full"
          />
        </div>

        {/* More Button */}
        <div className="text-center">
          <a
            href="#about"
            className="inline-block px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm"
          >
            More
          </a>
        </div>
      </div>
    </section>
  )
}

