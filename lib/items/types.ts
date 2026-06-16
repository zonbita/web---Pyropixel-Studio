export type ItemCategory =
  | 'rifle'
  | 'machinegun'
  | 'sniper'
  | 'shotgun'
  | 'smg'
  | 'equipment'
  | 'melee'
  | 'support'

export type ItemRarity = 'common' | 'rare' | 'epic' | 'legendary'

export type PowerGrade = 'S' | 'SS' | 'SSS' | 'A' | 'B' | 'C'

export type LocalizedText = {
  vi: string
  en: string
}

export type GameItem = {
  id: string
  category: ItemCategory
  rarity: ItemRarity
  name: LocalizedText
  typeLabel: LocalizedText
  rarityLabel: LocalizedText
  acquisition: LocalizedText
  description: LocalizedText
  image?: string
  accent: string
  power: {
    pve: PowerGrade
    pvp: PowerGrade
    boss: PowerGrade
  }
}

export type ItemCategoryFilter = ItemCategory | 'all'

export type ItemRarityFilter = ItemRarity | 'all'
