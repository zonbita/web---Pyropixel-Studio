'use client'

import type { GameItem } from '@/lib/items/types'
import { getCategoryIcon, getRarityColor } from '@/lib/items/utils'
import type { Locale } from '@/lib/i18n/types'

type ItemInfoPanelProps = {
  item: GameItem | null
  locale: Locale
  emptyMessage: string
  acquisitionLabel: string
}

export default function ItemInfoPanel({
  item,
  locale,
  emptyMessage,
  acquisitionLabel,
}: ItemInfoPanelProps) {
  return (
    <div className={`items-info-block ${item ? '' : 'is-empty'}`}>
      <p className="items-info-block__empty">{emptyMessage}</p>

      {item && (
        <>
          <p className="items-info-block__type">{item.typeLabel[locale]}</p>
          <div className="items-info-block__title">
            <span
              className="items-info-block__icon"
              style={{ color: item.accent }}
            >
              {getCategoryIcon(item.category)}
            </span>
            <h3 className="items-info-block__name">{item.name[locale]}</h3>
          </div>
          <div className="items-info-block__meta">
            <span
              className="items-info-block__rarity"
              style={{ backgroundColor: getRarityColor(item.rarity) }}
            >
              {item.rarityLabel[locale]}
            </span>
            <p className="items-info-block__memo">
              {acquisitionLabel}
              <span>{item.acquisition[locale]}</span>
            </p>
          </div>
          <p className="items-info-block__detail">{item.description[locale]}</p>
        </>
      )}
    </div>
  )
}
