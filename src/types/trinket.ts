export interface TrinketSynergy {
  item: string;
  details: string;
}

export interface Trinket {
  /** Unique slug identifier, e.g. "swallowed_penny" */
  id: string;
  name: string;
  /** Flavor text shown on the trinket, e.g. "Gulp!" */
  quote: string;
  /** Full gameplay effect */
  effect: string;
  /** How the trinket is unlocked, e.g. achievement or challenge name */
  unlock: string;
  /** Trinket quality rating, 0 (worst) to 4 (best) */
  quality: 0 | 1 | 2 | 3 | 4;
  /** Pool sources the trinket can appear in */
  pools: string[];
  /** Icon filename resolved against src/data/generatedTrinketIcons.ts */
  iconKey: string;
  /** Game version that introduced the trinket, e.g. "Rebirth" */
  addedIn: string;
  /** Known synergies with other items/trinkets */
  synergies: TrinketSynergy[];
}