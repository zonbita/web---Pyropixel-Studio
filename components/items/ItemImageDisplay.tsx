'use client'

import Image from 'next/image'
import type { GameItem } from '@/lib/items/types'
import { getCategoryIcon } from '@/lib/items/utils'

type ItemImageDisplayProps = {
  item: GameItem | null
  emptyMessage: string
}

export default function ItemImageDisplay({ item, emptyMessage }: ItemImageDisplayProps) {
  if (!item) {
    return <p className="items-img-empty">{emptyMessage}</p>
  }

  if (item.image) {
    return (
      <Image
        src={item.image}
        alt={item.name.en}
        width={547}
        height={407}
        className="items-img"
        unoptimized
      />
    )
  }

  return (
    <div
      className="items-img-placeholder"
      style={{ background: `radial-gradient(circle, ${item.accent}33 0%, transparent 70%)` }}
    >
      <span style={{ color: item.accent }}>{getCategoryIcon(item.category)}</span>
    </div>
  )
}
