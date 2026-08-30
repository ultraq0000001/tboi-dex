import { transformItemToJson, getIconFilenameForId } from './items-helpers';

/**
 * Explicit registry mapping an Item's `iconKey` to its bundled image.
 * Metro requires static require() calls, so each icon needs one line here.
 */
export const itemIcons: Partial<Record<string, ImageSourcePropType>> = {};

// NOTE: In production with many items, use dynamic loading from expo-file-system
// For now, the transform function in items-helpers.ts generates the correct paths.
