import { ImageSourcePropType } from 'react-native';

/**
 * Explicit registry mapping a Category's `iconKey` to its bundled hub
 * button image. Metro requires static `require()` calls, so each icon
 * needs one line here as it's added under assets/media/Content/ (expected
 * filename convention: {category_name}-button.webp) — no key means
 * CategoryTile falls back to a placeholder label.
 */
export const categoryIcons: Partial<Record<string, ImageSourcePropType>> = {
    items: require('../../assets/media/Content/Items-button.webp'),
    trinkets: require('../../assets/media/Content/Trinkets-button.webp'),
    achievements: require('../../assets/media/Content/Achievements-button.webp'),
    bosses: require('../../assets/media/Content/Bosses-button.webp'),
    challenges: require('../../assets/media/Content/Challenges-button.webp'),
    chapters: require('../../assets/media/Content/Chapters-button.webp'),
    characters: require('../../assets/media/Content/Characters-button.webp'),
    mechanics: require('../../assets/media/Content/Mechanics-button.webp'),
    monsters: require('../../assets/media/Content/Monsters-button.webp'),
    objects: require('../../assets/media/Content/Objects-button.webp'),
    pickups: require('../../assets/media/Content/Pickups-button.webp'),
    rooms: require('../../assets/media/Content/Rooms-button.webp'),
    stats: require('../../assets/media/Content/Stats-button.webp'),
    transformations: require('../../assets/media/Content/Transformations-button.webp'),
    owned: require('../../assets/media/Content/Owned-button.webp'),
};
