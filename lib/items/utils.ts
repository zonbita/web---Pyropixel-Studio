import type { GameItem, ItemCategoryFilter, ItemRarityFilter } from '@/lib/items/types'

export function filterItems(
  items: GameItem[],
  category: ItemCategoryFilter,
  rarity: ItemRarityFilter,
): GameItem[] {
  return items.filter((item) => {
    const categoryMatch = category === 'all' || item.category === category
    const rarityMatch = rarity === 'all' || item.rarity === rarity
    return categoryMatch && rarityMatch
  })
}

export function getRarityColor(rarity: GameItem['rarity']): string {
  const colors: Record<GameItem['rarity'], string> = {
    common: '#64748b',
    rare: '#2563eb',
    epic: '#7c3aed',
    legendary: '#d97706',
  }
  return colors[rarity]
}

export function getCategoryIcon(category: GameItem['category']): string {
  const icons: Record<GameItem['category'], string> = {
    rifle: 'AR',
    machinegun: 'MG',
    sniper: 'SR',
    shotgun: 'SG',
    smg: 'SMG',
    equipment: 'EQ',
    melee: 'ML',
    support: 'SP',
  }
  return icons[category]
}
