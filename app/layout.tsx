import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'
import Providers from '@/components/Providers'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pyropixel Studio',
  description: 'Chúng tôi yêu thích trò chơi!',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="vi">
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
