import { ImageSourcePropType } from 'react-native';

/**
 * Explicit registry mapping an Item's `iconKey` to its bundled image.
 * Metro requires static `require()` calls, so each icon needs one line
 * here as it's added under assets/icons/items/<subtype>/ — no key means
 * ItemTile/ItemDetailScreen fall back to a placeholder.
 */
export const itemIcons: Partial<Record<string, ImageSourcePropType>> = {
  brimstone: require('../../assets/icons/items/passives/Brimstone_Icon.webp'),
};
