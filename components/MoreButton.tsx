import Link from 'next/link'

interface MoreButtonProps {
  href: string
  label: string
  className?: string
}

export default function MoreButton({ href, label, className = '' }: MoreButtonProps) {
  return (
    <Link href={href} className={`more-button ${className}`}>
      <span className="more-button-label">{label}</span>
      <svg viewBox="0 0 12 21" className="more-button-arrow" aria-hidden="true">
        <path d="M1.5 1.5 L9.5 10.5 L1.5 19.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    </Link>
  )
}
