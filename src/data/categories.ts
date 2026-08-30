export interface Category {
  key: string;
  label: string;
  iconKey: string;
  /** Whether this category has real data/screens wired up yet. */
  implemented: boolean;
}

export const categories: Category[] = [
  { key: 'items', label: 'Items', iconKey: 'items', implemented: true },
  { key: 'achievements', label: 'Achievements', iconKey: 'achievements', implemented: false },
  { key: 'bosses', label: 'Bosses', iconKey: 'bosses', implemented: false },
  { key: 'challenges', label: 'Challenges', iconKey: 'challenges', implemented: false },
  { key: 'chapters', label: 'Chapters', iconKey: 'chapters', implemented: false },
  { key: 'characters', label: 'Characters', iconKey: 'characters', implemented: false },
  { key: 'mechanics', label: 'Mechanics', iconKey: 'mechanics', implemented: false },
  { key: 'monsters', label: 'Monsters', iconKey: 'monsters', implemented: false },
  { key: 'objects', label: 'Objects', iconKey: 'objects', implemented: false },
  { key: 'pickups', label: 'Pick Ups', iconKey: 'pickups', implemented: false },
  { key: 'rooms', label: 'Rooms', iconKey: 'rooms', implemented: false },
  { key: 'stats', label: 'Stats', iconKey: 'stats', implemented: false },
  { key: 'transformations', label: 'Transformations', iconKey: 'transformations', implemented: false },
  { key: 'owned', label: 'Cool stuff', iconKey: 'owned', implemented: false },
];

