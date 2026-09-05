export type ItemType = 'passive' | 'active' | 'trinket' | 'familiar';

export interface ItemSynergy {
  id?: string;
  item: string;
  details: string;
}

export interface Item {
  /** Unique slug identifier, e.g. "sad_onion" */
  id: string;
  /** In-game collectible id, e.g. 1 for The Sad Onion */
  itemId: number;
  name: string;
  type: ItemType;
  /** Item quality rating, 0 (worst) to 4 (best) */
  quality: 0 | 1 | 2 | 3 | 4;
  /** Flavor text shown on the item pedestal / Book of Belial style quote */
  quote: string;
  /** Full gameplay effect (item_effect) */
  effect: string;
  /** Item pools the item can appear in, e.g. "Treasure Room" */
  pools: string[];
  /** How the item is unlocked, e.g. "Starts unlocked" or achievement name */
  unlock: string;
  /** Icon filename resolved against src/data/generatedItemIcons.ts */
  iconKey: string;
  tags?: string[];
  /** Known synergies with other items/trinkets */
  synergies: ItemSynergy[];
}