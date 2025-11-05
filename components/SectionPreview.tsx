import Link from 'next/link'
import BackgroundImage from './BackgroundImage'

interface SectionPreviewProps {
  title: string
  subtitle: string
  href: string
  image: {
    src: string
    alt: string
  }
}

export default function SectionPreview({ title, subtitle, href, image }: SectionPreviewProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 bg-black overflow-hidden">
      {/* Background Image */}
      <BackgroundImage 
        src={image.src}
        alt={image.alt}
        overlay={true}
      />

      {/* Content */}
      <div className="relative z-20 w-full mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight drop-shadow-lg">
            {title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90 drop-shadow-md">
            {subtitle}
          </p>
        </div>

        <div className="text-center">
          <Link
            href={href}
            className="inline-block px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm"
          >
            More
          </Link>
        </div>
      </div>
    </section>
  )
}

