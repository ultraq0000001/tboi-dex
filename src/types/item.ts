export type ItemType = 'passive' | 'active' | 'trinket' | 'familiar';

export type ItemPool =
  | 'Treasure Room'
  | 'Boss Room'
  | 'Shop'
  | 'Devil Room'
  | 'Angel Room'
  | 'Secret Room'
  | 'Library'
  | 'Curse Room'
  | 'Golden Chest'
  | 'Red Chest'
  | 'Beggar'
  | 'Demon Beggar'
  | 'Greed Mode'
  | 'Ultra Secret Room'
  | 'Planetarium'
  | 'Baby Shop';

export interface Item {
  /** Unique slug identifier, e.g. "sad_onion" */
  id: string;
  name: string;
  type: ItemType;
  /** Item quality rating, 0 (worst) to 4 (best) */
  quality: 0 | 1 | 2 | 3 | 4;
  description: string;
  /** Flavor text shown on the item pedestal / Book of Belial style quote */
  quote?: string;
  pools: ItemPool[];
  /** How the item is unlocked, e.g. "Starts unlocked" or achievement name */
  unlock: string;
  /** Local asset key resolved in src/data/itemIcons.ts */
  iconKey: string;
  tags?: string[];
}
