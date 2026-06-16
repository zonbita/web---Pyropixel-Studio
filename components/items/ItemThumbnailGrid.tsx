'use client'

import Image from 'next/image'
import type { GameItem } from '@/lib/items/types'
import { getCategoryIcon } from '@/lib/items/utils'
import type { Locale } from '@/lib/i18n/types'

type ItemThumbnailGridProps = {
  items: GameItem[]
  selectedId: string | null
  locale: Locale
  emptyMessage: string
  onSelect: (id: string) => void
}

export default function ItemThumbnailGrid({
  items,
  selectedId,
  locale,
  emptyMessage,
  onSelect,
}: ItemThumbnailGridProps) {
  if (items.length === 0) {
    return (
      <div className="items-thumbs">
        <p className="items-thumbs__empty">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="items-thumbs">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`items-thumb ${selectedId === item.id ? 'is-active' : ''}`}
          onClick={() => onSelect(item.id)}
          aria-label={item.name[locale]}
        >
          <span className="items-thumb__inner" style={{ color: item.accent }}>
            {item.image ? (
              <Image
                src={item.image}
                alt=""
                width={57}
                height={57}
                className="items-thumb__image"
                unoptimized
              />
            ) : (
              getCategoryIcon(item.category)
            )}
          </span>
        </button>
      ))}
    </div>
  )
}
