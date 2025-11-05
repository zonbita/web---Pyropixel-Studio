import { ReactNode } from 'react'

interface ContentSectionProps {
  title: string
  subtitle?: string
  content?: ReactNode
}

export default function ContentSection({ title, subtitle, content }: ContentSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24 bg-black">
      <div className="relative z-20 w-full mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90">
              {subtitle}
            </p>
          )}
        </div>

        {content && (
          <div className="w-full">
            {content}
          </div>
        )}
      </div>
    </section>
  )
}

