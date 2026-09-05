import trinketsData from './trinkets_rebirth.json';
import { iconFilenameForTrinket } from './trinketIcons';
import type { Trinket, TrinketSynergy } from '../types/trinket';

export type { Trinket };

interface RawTrinket {
  id: number;
  name?: string;
  description?: string;
  item_effect?: string;
  unlock?: string;
  quality?: number | string;
  item_pool?: string[];
  icon?: string;
  added_in?: string;
  synergy?: { id?: string; item?: string; details?: string }[];
}

function toSlug(name: string, fallbackId: number): string {
  const base = name
    .replace(/'/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
  return base || `trinket-${fallbackId}`;
}

function toQuality(raw: number | string | undefined): 0 | 1 | 2 | 3 | 4 {
  const q = parseInt(String(raw), 10);
  if (q < 0) return 0;
  if (q > 4) return 4;
  return q as 0 | 1 | 2 | 3 | 4;
}

function toSynergies(raw: RawTrinket['synergy']): TrinketSynergy[] {
  return (raw ?? []).flatMap((s) => {
    const item = (s.item ?? '').trim();
    const details = (s.details ?? '').trim();
    return item || details ? [{ item, details }] : [];
  });
}

export const trinkets: Trinket[] = (trinketsData as RawTrinket[]).map((raw, index) => ({
  id: toSlug(raw.name ?? '', raw.id ?? index),
  name: raw.name ?? 'Unknown Trinket',
  quote: raw.description ?? '',
  effect: raw.item_effect ?? '',
  unlock: raw.unlock || 'Starts unlocked',
  quality: toQuality(raw.quality),
  pools: Array.isArray(raw.item_pool)
    ? raw.item_pool.filter((p): p is string => typeof p === 'string')
    : [],
  iconKey: iconFilenameForTrinket(raw) ?? '',
  addedIn: raw.added_in ?? '',
  synergies: toSynergies(raw.synergy),
}));