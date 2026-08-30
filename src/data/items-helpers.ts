import * as fs from 'expo-file-system';

/**
 * Reads item data from the JSON file and transforms it to Item[] type.
 * Uses expo-file-system which works in Expo context.
 */
export async function readItemsFromJson(): Promise<any[]> {
  try {
    // Get path to project root and construct relative path
    const filePath = fs.path.join('src', 'data', 'items_rebirth.json');
    
    // Read the JSON content (works in Node.js)
    const contents = await fs.readFile(filePath);
    
    // Parse the JSON array directly
    return JSON.parse(contents.toString());
  } catch (error: any) {
    console.error('Error loading items_rebirth.json:', error);
    return [];
  }
}

/**
 * Produces the array of Item objects by reading and transforming from JSON.
 */
export async function loadItemsFromJson(): Promise<any[]> {
  // Load raw JSON data
  const rawData: any[] = await readItemsFromJson();
  
  // Transform each item to match TypeScript interface using transformItemToJson
  return rawData.map((item) => ({
    id: typeof item.clean_name === 'string'
      ? item.clean_name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      : item.id.toString(),
    name: item.name,
    type: item.type as any,
    quality: parseInt(item.quality as string) || 0,
    description: item.description || '',
    quote: item.quote,
    pools: Array.isArray(item.item_pool) ? item.item_pool.filter((p: any) => typeof p === 'string') : [],
    unlock: (item.unlock || 'Starts unlocked').toString(),
    iconKey: typeof item.clean_name === 'string'
      ? item.clean_name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      : item.id.toString(),
  }));
}

import { transformItemToJson } from './itemIcons';