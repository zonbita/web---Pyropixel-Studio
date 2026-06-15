import Image from 'next/image'

interface LogoProps {
  className?: string
  priority?: boolean
}

export default function Logo({ className = 'h-10 w-auto', priority = false }: LogoProps) {
  return (
    <Image
      src="/videos/logo.png"
      alt="PyroPixel Games Studio"
      width={320}
      height={80}
      className={className}
      priority={priority}
    />
  )
}
