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
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">ABOUT US</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">MEET THE TEAM</p>
        </div>

        {/* Team Images */}
        <div className="mb-12">
          <ImageGallery 
            images={teamImages}
            columns={4}
          />
        </div>

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

