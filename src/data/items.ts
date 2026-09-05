import itemsData from './items_rebirth.json';
import { iconFilenameForItem } from './generatedItemIcons';
import type { Item, ItemSynergy, ItemType } from '../types/item';

export type { Item };

interface RawItem {
  id: number;
  name?: string;
  type?: string;
  quality?: number | string;
  description?: string;
  quote?: string;
  item_effect?: string;
  item_pool?: string[];
  image?: string;
  icon?: string;
  clean_name?: string;
  tags?: string[];
  synergy?: { id?: string; item?: string; details?: string }[];
}

function toType(type: string | undefined): ItemType {
  return type === 'active' || type === 'familiar' || type === 'trinket'
    ? type
    : 'passive';
}

function toSlug(name: string, fallbackId: number): string {
  const base = name
    .replace(/'/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
  return base || `item-${fallbackId}`;
}

function toQuality(raw: number | string | undefined): 0 | 1 | 2 | 3 | 4 {
  const q = parseInt(String(raw), 10);
  if (q < 0) return 0;
  if (q > 4) return 4;
  return q as 0 | 1 | 2 | 3 | 4;
}

function toSynergies(raw: RawItem['synergy']): ItemSynergy[] {
  return (raw ?? []).flatMap((s) => {
    const item = (s.item ?? '').trim();
    const details = (s.details ?? '').trim();
    return item || details ? [{ id: s.id, item, details }] : [];
  });
}

export const items: Item[] = (itemsData as RawItem[]).map((raw, index) => ({
  id: toSlug(raw.name ?? '', raw.id ?? index),
  itemId: Number.isFinite(raw.id) ? raw.id : index,
  name: raw.name ?? 'Unknown Item',
  type: toType(raw.type),
  quality: toQuality(raw.quality),
  quote: raw.quote ?? '',
  effect: raw.item_effect ?? raw.description ?? '',
  pools: Array.isArray(raw.item_pool) ? raw.item_pool.filter((p): p is string => typeof p === 'string') : [],
  unlock: 'Starts unlocked',
  iconKey: iconFilenameForItem(raw) ?? '',
  tags: raw.tags,
  synergies: toSynergies(raw.synergy),
}));