'use client'

import CategoryIcon from '@/components/items/CategoryIcon'
import type { ItemCategory, ItemCategoryFilter, ItemRarity, ItemRarityFilter } from '@/lib/items/types'

type ItemFilterBarProps = {
  category: ItemCategoryFilter
  rarity: ItemRarityFilter
  categories: ItemCategory[]
  rarities: ItemRarity[]
  labels: {
    all: string
    categories: Record<ItemCategory, string>
    rarities: Record<ItemRarity, string>
  }
  onCategoryChange: (category: ItemCategoryFilter) => void
  onRarityChange: (rarity: ItemRarityFilter) => void
}

function RarityTab({
  active,
  label,
  onClick,
}: {
  active: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      className={`items-category items-category--rarity ${active ? 'is-active' : ''}`}
      onClick={onClick}
    >
      <span className="items-category__name">{label}</span>
    </button>
  )
}

function TypeTab({
  active,
  label,
  category,
  onClick,
}: {
  active: boolean
  label: string
  category: ItemCategory | 'all'
  onClick: () => void
}) {
  return (
    <button
      type="button"
      className={`items-category items-category--type ${active ? 'is-active' : ''}`}
      onClick={onClick}
      title={label}
    >
      <CategoryIcon category={category} />
      <span className="items-category__name">{label}</span>
    </button>
  )
}

export default function ItemFilterBar({
  category,
  rarity,
  categories,
  rarities,
  labels,
  onCategoryChange,
  onRarityChange,
}: ItemFilterBarProps) {
  return (
    <div className="items-filter-bar">
      <div className="items-categories items-categories--rarities">
        <RarityTab
          active={rarity === 'all'}
          label={labels.all}
          onClick={() => onRarityChange('all')}
        />
        {rarities.map((value) => (
          <RarityTab
            key={value}
            active={rarity === value}
            label={labels.rarities[value]}
            onClick={() => onRarityChange(value)}
          />
        ))}
      </div>

      <div className="items-categories items-categories--types">
        <TypeTab
          active={category === 'all'}
          label={labels.all}
          category="all"
          onClick={() => onCategoryChange('all')}
        />
        {categories.map((value) => (
          <TypeTab
            key={value}
            active={category === value}
            label={labels.categories[value]}
            category={value}
            onClick={() => onCategoryChange(value)}
          />
        ))}
      </div>
    </div>
  )
}
