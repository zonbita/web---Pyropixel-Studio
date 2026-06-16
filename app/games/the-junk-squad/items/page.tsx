'use client'

import Navigation from '@/components/Navigation'
import ItemsCatalog from '@/components/items/ItemsCatalog'

export default function JunkSquadItemsPage() {
  return (
    <main className="items-page">
      <Navigation />
      <ItemsCatalog backHref="/games/the-junk-squad" />
    </main>
  )
}
