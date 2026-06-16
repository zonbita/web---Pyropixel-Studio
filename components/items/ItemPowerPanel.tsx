'use client'

import type { GameItem, PowerGrade } from '@/lib/items/types'

type ItemPowerPanelProps = {
  item: GameItem | null
  title: string
  emptyMessage: string
  variant?: 'desktop' | 'mobile'
  modes: {
    pve: string
    pvp: string
    boss: string
  }
}

function filledSegments(grade: PowerGrade): number {
  if (grade === 'SSS') return 14
  if (grade === 'SS') return 11
  if (grade === 'S') return 8
  if (grade === 'A') return 5
  if (grade === 'B') return 3
  return 1
}

function PowerSegments({ grade }: { grade: PowerGrade }) {
  const filled = filledSegments(grade)

  return (
    <div className="items-power-row__bars" aria-hidden="true">
      {Array.from({ length: 14 }, (_, index) => (
        <span
          key={index}
          className={`items-power-row__bar ${index < filled ? 'is-filled' : ''}`}
        />
      ))}
    </div>
  )
}

function DesktopPowerRow({ label, grade }: { label: string; grade: PowerGrade }) {
  return (
    <div className="items-power-row">
      <span className="items-power-row__mode-badge" aria-hidden="true" />
      <span className="items-power-row__mode">{label}</span>
      <PowerSegments grade={grade} />
      <span className="items-power-row__grade-box">
        <span>{grade}</span>
      </span>
    </div>
  )
}

function MobilePowerBlock({ label, grade }: { label: string; grade: PowerGrade }) {
  return (
    <div className="items-power-mobile-block">
      <span className="items-power-mobile-block__mode">{label}</span>
      <div className="items-power-row__grade-box">
        <span>{grade}</span>
      </div>
    </div>
  )
}

export default function ItemPowerPanel({
  item,
  title,
  emptyMessage,
  variant = 'desktop',
  modes,
}: ItemPowerPanelProps) {
  if (!item) {
    return (
      <div className="items-power-panel">
        <h5 className="items-power-panel__title">{title}</h5>
        <p className="items-power-panel__empty">{emptyMessage}</p>
      </div>
    )
  }

  const rows = [
    { label: modes.pve, grade: item.power.pve },
    { label: modes.pvp, grade: item.power.pvp },
    { label: modes.boss, grade: item.power.boss },
  ]

  if (variant === 'mobile') {
    return (
      <div className="items-power-panel items-power-panel--mobile">
        {rows.map((row) => (
          <MobilePowerBlock key={row.label} label={row.label} grade={row.grade} />
        ))}
      </div>
    )
  }

  return (
    <div className="items-power-panel">
      <h5 className="items-power-panel__title">{title}</h5>
      {rows.map((row) => (
        <DesktopPowerRow key={row.label} label={row.label} grade={row.grade} />
      ))}
    </div>
  )
}
