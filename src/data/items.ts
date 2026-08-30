import { Item } from '../types/item';
import { transformItemToJson } from './items-helpers';

/**
 * Produces the array of Item objects.
 */
export async function loadItemsFromJson(): Promise<Item[]> {
  // NOTE: This is a placeholder - in production this would dynamically parse items_rebirth.json
  // React Native/Expo requires different loading approaches, so JSON data is typically either:
  // 1. Imported statically during bundling (preferred for static assets)
  // 2. Loaded via expo-file-system API (for dynamic file access)
  // 
  // To load from items_rebirth.json in React Native context, use the transformItemToJson helper
  // combined with expo-file-system's getDirectoryFilePath().
  return [];
}

// Type exports
export type { Item };
export const items: Item[] = [];