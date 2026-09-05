import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Trinket } from '../types/trinket';
import { PixelIcon } from './PixelIcon';

const TRINKET_COLOR = '#f7c04f';

export function TrinketTile({ trinket, onPress }: { trinket: Trinket; onPress: () => void }) {
  const initials = trinket.name
    .replace(/^(The|A)\s+/i, '')
    .slice(0, 2)
    .toUpperCase();

  return (
    <Pressable style={styles.tile} onPress={onPress}>
      <View style={[styles.icon, { borderColor: TRINKET_COLOR }]}>
        <PixelIcon iconKey={trinket.iconKey} size={52} initials={initials} />
      </View>
      <Text style={styles.name} numberOfLines={2}>
        {trinket.name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1 / 3,
    alignItems: 'center',
    padding: 8,
  },
  icon: {
    width: 64,
    height: 64,
    borderRadius: 12,
    borderWidth: 2,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    overflow: 'hidden',
  },
  name: {
    color: '#ddd',
    fontSize: 12,
    textAlign: 'center',
  },
});