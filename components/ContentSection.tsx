import { ReactNode } from 'react'

interface ContentSectionProps {
  title: string
  subtitle?: string
  content?: ReactNode
}

export default function ContentSection({ title, subtitle, content }: ContentSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-16 md:py-24">
      <div className="relative z-20 w-full mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="site-section-title mb-0 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="site-section-subtitle mb-8 opacity-90 md:mb-12">
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

