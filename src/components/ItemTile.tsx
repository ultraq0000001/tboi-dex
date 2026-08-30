import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Item } from '../types/item';
import { itemIcons } from '../data/itemIcons';

const TYPE_COLORS: Record<Item['type'], string> = {
  passive: '#4f8ef7',
  active: '#f75f4f',
  trinket: '#f7c04f',
  familiar: '#4ff793',
};

export function ItemTile({ item, onPress }: { item: Item; onPress: () => void }) {
  const icon = itemIcons[item.iconKey];
  const initials = item.name
    .replace(/^(The|A)\s+/i, '')
    .slice(0, 2)
    .toUpperCase();

  return (
    <Pressable style={styles.tile} onPress={onPress}>
      <View style={[styles.icon, { borderColor: TYPE_COLORS[item.type] }]}>
        {icon ? (
          <Image source={icon} style={styles.iconImage} resizeMode="contain" />
        ) : (
          <Text style={styles.initials}>{initials}</Text>
        )}
      </View>
      <Text style={styles.name} numberOfLines={2}>
        {item.name}
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
  iconImage: {
    width: '80%',
    height: '80%',
  },
  initials: {
    color: '#eee',
    fontWeight: '700',
    fontSize: 18,
  },
  name: {
    color: '#ddd',
    fontSize: 12,
    textAlign: 'center',
  },
});
