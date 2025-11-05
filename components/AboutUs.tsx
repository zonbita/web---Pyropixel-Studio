import SingleImage from './SingleImage'

export default function AboutUs() {
  // Single team image - replace with your actual team photo
  const teamImage = {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop',
    alt: 'Our Team',
  }

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 bg-black">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">ABOUT US</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90">MEET THE TEAM</p>
        </div>

        {/* Single Image */}
        <div className="mb-8 md:mb-12 w-full">
          <SingleImage 
            src={teamImage.src}
            alt={teamImage.alt}
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

