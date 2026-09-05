import { ImageSourcePropType } from 'react-native';
import { itemIcons } from './itemIcons';
import { trinketIcons } from './trinketIcons';

/**
 * Merged static require() registry for every bundled icon, keyed by icon
 * filename. Item and trinket icon keys (`collectible_*` / `trinket_*`) never
 * collide, so a single lookup table drives PixelIcon for both content types.
 */
export const icons: Partial<Record<string, ImageSourcePropType>> = {
  ...itemIcons,
  ...trinketIcons,
};