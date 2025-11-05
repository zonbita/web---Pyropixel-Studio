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
    <section id="jobs" className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">JOBS</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">JOIN US</p>
        </div>

        {/* Office/Culture Images */}
        <div className="mb-12">
          <ImageGallery 
            images={officeImages}
            columns={3}
          />
        </div>

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

