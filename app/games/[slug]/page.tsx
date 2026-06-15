import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import GameDetail from '@/components/GameDetail'
import Footer from '@/components/Footer'
import { getAllGameSlugs, getGameBySlug } from '@/lib/games'

export function generateStaticParams() {
  return getAllGameSlugs().map((slug) => ({ slug }))
}

export default function GameDetailPage({ params }: { params: { slug: string } }) {
  const game = getGameBySlug(params.slug)

  if (!game) {
    notFound()
  }

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navigation />
      <GameDetail game={game} />
      <Footer />
    </main>
  )
}
