import { ItemType } from '../types/item';

export const TYPE_LABELS: Record<ItemType, string> = {
  passive: 'Passive Item',
  active: 'Active Item',
  trinket: 'Trinket',
  familiar: 'Familiar',
};

export const TYPE_COLORS: Record<ItemType, string> = {
  passive: '#4f8ef7',
  active: '#f75f4f',
  trinket: '#f7c04f',
  familiar: '#4ff793',
};