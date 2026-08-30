import { ImageSourcePropType } from 'react-native';

/**
 * Explicit registry mapping a Category's `iconKey` to its bundled hub
 * button image. Metro requires static `require()` calls, so each icon
 * needs one line here as it's added under assets/icons/content/ (expected
 * filename convention: {category_name}-button.webp) — no key means
 * CategoryTile falls back to a placeholder label.
 */
export const categoryIcons: Partial<Record<string, ImageSourcePropType>> = {
    items: require('../../assets/icons/content/Items-button.webp'),
    achievements: require('../../assets/icons/content/Achievements-button.webp'),
    bosses: require('../../assets/icons/content/Bosses-button.webp'),
    challenges: require('../../assets/icons/content/Challenges-button.webp'),
    chapters: require('../../assets/icons/content/Chapters-button.webp'),
    characters: require('../../assets/icons/content/Characters-button.webp'),
    mechanics: require('../../assets/icons/content/Mechanics-button.webp'),
    monsters: require('../../assets/icons/content/Monsters-button.webp'),
    objects: require('../../assets/icons/content/Objects-button.webp'),
    pickups: require('../../assets/icons/content/Pickups-button.webp'),
    rooms: require('../../assets/icons/content/Rooms-button.webp'),
    stats: require('../../assets/icons/content/Stats-button.webp'),
    transformations: require('../../assets/icons/content/Transformations-button.webp'),
    owned: require('../../assets/icons/content/Owned-button.webp'),
};
