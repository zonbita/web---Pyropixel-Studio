import type { ReactNode } from 'react'
import type { ItemCategory } from '@/lib/items/types'

export default function CategoryIcon({ category }: { category: ItemCategory | 'all' }) {
  const className = 'items-category__svg'

  if (category === 'all') {
    return (
      <svg viewBox="0 0 17 17" className={className} aria-hidden="true">
        <path
          d="M7.5 6V0a8.4 8.4 0 0 0 0 16.7V10.7A2.7 2.7 0 0 1 5.8 8.3 2.7 2.7 0 0 1 7.5 6Zm3.2 1.5h6A8.2 8.2 0 0 0 9.2 0V6a2.3 2.3 0 0 1 1.6 1.5ZM9.2 10.7v6a8.2 8.2 0 0 0 7.5-7.5H10.8a2.3 2.3 0 0 1-1.6 1.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  const icons: Record<ItemCategory, ReactNode> = {
    rifle: (
      <path
        d="M1 9.5h12l-1 2H4l-.5 1.5H1V9.5Zm2-6h8l1 2H3l-.5-1H3Z"
        fill="currentColor"
      />
    ),
    machinegun: (
      <path
        d="M0 10h14v2H12v1H9v-2H6V8H3v2H0v-2Zm3-7h8v2H3V3Z"
        fill="currentColor"
      />
    ),
    sniper: (
      <path
        d="M0 10.5h14l-1.5 2H2.5L1 10.5H0Zm2-7h10v2H2V3.5Z"
        fill="currentColor"
      />
    ),
    shotgun: (
      <path d="M1 11h10l-2 2H3L1 11Zm1-8h7l1.5 2H2.5L2 3Z" fill="currentColor" />
    ),
    smg: (
      <path
        d="M1 10h9v2H8v1H5v-2H3V8H1v2Zm2-6h6v2H3V4Z"
        fill="currentColor"
      />
    ),
    equipment: (
      <path
        d="M2 6h9v2H2V6Zm0 4h9v2H2v-2Zm1-8h7v1H3V2Z"
        fill="currentColor"
      />
    ),
    melee: (
      <path
        d="M7 1l2 8-2 2-2-2 2-8Zm-4 9 2 2-2 2-2-2 2-2Z"
        fill="currentColor"
      />
    ),
    support: (
      <path
        d="M8 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-1 3v4l3 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    ),
  }

  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      {icons[category]}
    </svg>
  )
}
