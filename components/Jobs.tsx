import ImageGallery from './ImageGallery'

export default function Jobs() {
  // Example office/culture images - replace with your actual images
  const officeImages = [
    {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      alt: 'Office Space 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
      alt: 'Office Space 2',
    },
    {
      src: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop',
      alt: 'Office Space 3',
    },
  ]

  return (
    <section id="jobs" className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-24 bg-black">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">JOBS</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90">JOIN US</p>
        </div>

        {/* Office/Culture Images - Full Width Grid */}
        <div className="mb-8 md:mb-12 w-full">
          <ImageGallery 
            images={officeImages}
            columns={3}
            className="w-full"
          />
        </div>

        {/* More Button */}
        <div className="text-center">
          <a
            href="#jobs"
            className="inline-block px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm"
          >
            More
          </a>
        </div>
      </div>
    </section>
  )
}

