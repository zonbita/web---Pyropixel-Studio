import SingleImage from './SingleImage'

export default function Jobs() {
  // Single office/culture image - replace with your actual image
  const officeImage = {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop',
    alt: 'Office Space',
  }

  return (
    <section id="jobs" className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 bg-black">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">JOBS</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90">JOIN US</p>
        </div>

        {/* Single Image */}
        <div className="mb-8 md:mb-12 w-full">
          <SingleImage 
            src={officeImage.src}
            alt={officeImage.alt}
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

