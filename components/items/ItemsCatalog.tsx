'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { GAME_ITEMS, ITEM_CATEGORIES, ITEM_RARITIES } from '@/lib/items'
import type { ItemCategoryFilter, ItemRarityFilter } from '@/lib/items/types'
import { filterItems } from '@/lib/items/utils'
import { useLanguage } from '@/components/LanguageProvider'
import ItemFilterBar from '@/components/items/ItemFilterBar'
import ItemImageDisplay from '@/components/items/ItemImageDisplay'
import ItemInfoPanel from '@/components/items/ItemInfoPanel'
import ItemPowerPanel from '@/components/items/ItemPowerPanel'
import ItemThumbnailGrid from '@/components/items/ItemThumbnailGrid'
import '@/components/items/items.css'

function getAdjacentIndex(currentIndex: number, direction: 'prev' | 'next', length: number) {
  if (length === 0) return -1
  if (direction === 'prev') {
    return currentIndex <= 0 ? length - 1 : currentIndex - 1
  }
  return currentIndex >= length - 1 ? 0 : currentIndex + 1
}

type ItemsCatalogProps = {
  backHref?: string
}

export default function ItemsCatalog({ backHref = '/games/the-junk-squad' }: ItemsCatalogProps) {
  const { locale, t } = useLanguage()
  const [category, setCategory] = useState<ItemCategoryFilter>('all')
  const [rarity, setRarity] = useState<ItemRarityFilter>('all')
  const [selectedId, setSelectedId] = useState<string | null>(GAME_ITEMS[0]?.id ?? null)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredItems = useMemo(
    () => filterItems(GAME_ITEMS, category, rarity),
    [category, rarity],
  )

  useEffect(() => {
    if (filteredItems.length === 0) {
      setSelectedId(null)
      return
    }

    if (!selectedId || !filteredItems.some((item) => item.id === selectedId)) {
      setSelectedId(filteredItems[0].id)
    }
  }, [filteredItems, selectedId])

  const selectedIndex = filteredItems.findIndex((item) => item.id === selectedId)
  const selectedItem = selectedIndex >= 0 ? filteredItems[selectedIndex] : null
  const canNavigate = filteredItems.length > 1

  const navigate = (direction: 'prev' | 'next') => {
    const nextIndex = getAdjacentIndex(selectedIndex, direction, filteredItems.length)
    if (nextIndex >= 0) {
      setSelectedId(filteredItems[nextIndex].id)
    }
  }

  const filterLabels = {
    all: t.items.filters.all,
    categories: t.items.filters.categories,
    rarities: t.items.filters.rarities,
  }

  return (
    <section className="items-catalog">
      <div className="items-catalog__bg-layer" aria-hidden="true" />

      <div className="items-top-block">
        <Link href={backHref} className="items-top-block__back" aria-label={t.items.backHome}>
          <svg viewBox="0 0 8 14" aria-hidden="true">
            <path d="M7 1 1 7l6 6" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </Link>
        <div className="items-top-block__title-art" aria-hidden="true">
          <span className="items-top-block__title-shadow">{t.items.pageTitle}</span>
          <span className="items-top-block__title-main">{t.items.pageTitle}</span>
        </div>
      </div>

      <div className="items-info-wrapper">
        <ItemInfoPanel
          item={selectedItem}
          locale={locale}
          emptyMessage={t.items.emptyType}
          acquisitionLabel={t.items.acquisition}
        />
      </div>

      <button
        type="button"
        className="items-filter-slide-btn"
        onClick={() => setFiltersOpen((open) => !open)}
        aria-expanded={filtersOpen}
      >
        <span className="items-filter-slide-btn__icon" aria-hidden="true">
          <svg viewBox="0 0 15 15">
            <path
              d="M13.5 0H.7a.7.7 0 0 0-.2 1.2l5.1 5.1v5.7a.7.7 0 0 0 .3.6l2.2 1.6a.7.7 0 0 0 1.1-.6V6.3l5.1-5.1A.7.7 0 0 0 13.5 0Z"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
        </span>
        <span className="items-filter-slide-btn__arrow" aria-hidden="true">
          {filtersOpen ? '‹' : '›'}
        </span>
      </button>

      <div className={`items-controls-wrapper ${filtersOpen ? 'is-open' : ''}`}>
        <ItemFilterBar
          category={category}
          rarity={rarity}
          categories={ITEM_CATEGORIES}
          rarities={ITEM_RARITIES}
          labels={filterLabels}
          onCategoryChange={setCategory}
          onRarityChange={setRarity}
        />
      </div>

      <div className="items-thumbnails-wrapper">
        <ItemThumbnailGrid
          items={filteredItems}
          selectedId={selectedId}
          locale={locale}
          emptyMessage={t.items.emptyFilter}
          onSelect={setSelectedId}
        />
      </div>

      <div className="items-img-wrapper">
        <div className="items-img-wrapper__main">
          <ItemImageDisplay item={selectedItem} emptyMessage={t.items.emptyType} />
        </div>
      </div>

      <div className="items-navigator">
        <button
          type="button"
          className={`items-navigator__btn items-navigator__btn--left ${canNavigate ? '' : 'is-disabled'}`}
          onClick={() => navigate('prev')}
          disabled={!canNavigate}
          aria-label={t.items.previous}
        >
          <svg viewBox="0 0 15 26" aria-hidden="true">
            <path d="M13.5 1 1 13l12.5 12" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <button
          type="button"
          className={`items-navigator__btn items-navigator__btn--right ${canNavigate ? '' : 'is-disabled'}`}
          onClick={() => navigate('next')}
          disabled={!canNavigate}
          aria-label={t.items.next}
        >
          <svg viewBox="0 0 15 26" aria-hidden="true">
            <path d="M1.5 1 14 13 1.5 25" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      <div className="items-power-wrapper">
        <ItemPowerPanel
          item={selectedItem}
          title={t.items.powerTitle}
          emptyMessage={t.items.emptyType}
          modes={t.items.powerModes}
        />
      </div>

      <div className="items-power-mobile">
        <ItemPowerPanel
          item={selectedItem}
          title={t.items.powerTitle}
          emptyMessage={t.items.emptyType}
          variant="mobile"
          modes={t.items.powerModes}
        />
      </div>
    </section>
  )
}
