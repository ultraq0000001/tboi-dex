import { Image, ImageSourcePropType, ImageStyle, Platform, StyleProp, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { itemIcons } from '../data/itemIcons';

const PIXELATED = { imageRendering: 'pixelated' } as StyleProp<ImageStyle>;

// Expo Go cannot run custom native code, so the native module is never present
// there. Loading it in Expo Go throws an unhandled "Cannot find native module"
// error, so we avoid requiring the package entirely outside of a dev build.
const canUsePixelPerfect = Platform.OS !== 'web' && Constants.executionEnvironment !== 'storeClient';

function NativePixelIcon({ source, size }: { source: number; size: number }) {
  // PixelImage does native nearest-neighbor scaling (crisp pixels on device).
  const { PixelImage } = require('expo-pixel-perfect') as typeof import('expo-pixel-perfect');
  return (
    <PixelImage
      // The package's TS Source type omits `number` (require result) but its
      // runtime supports it, so we pass the bundled module directly.
      source={source as unknown as never}
      scale={{ targetWidth: size, targetHeight: size }}
      scaleMode="nearest"
      android_renderMode="software"
      ios_renderMode="software"
    />
  );
}

function ImageIcon({ source, size }: { source: ImageSourcePropType; size: number }) {
  return (
    <Image
      source={source}
      resizeMode="contain"
      style={[styles.webImage, PIXELATED]}
    />
  );
}

export function PixelIcon({
  iconKey,
  size,
  initials,
}: {
  iconKey: string;
  size: number;
  initials: string;
}) {
  const source: ImageSourcePropType | undefined = itemIcons[iconKey];

  // Degrade gracefully: web always uses <Image> with image-rendering: pixelated;
  // native uses the nearest-neighbor module when available (dev build), otherwise
  // (Expo Go) falls back to a regular <Image> so the app doesn't crash.
  const useNative = canUsePixelPerfect && source !== undefined;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {source ? (
        useNative ? (
          <NativePixelIcon source={source as number} size={size} />
        ) : (
          <ImageIcon source={source} size={size} />
        )
      ) : (
        <Text style={styles.initials}>{initials}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  webImage: {
    width: '100%',
    height: '100%',
  },
  initials: {
    color: '#eee',
    fontWeight: '700',
    fontSize: 18,
  },
});
