import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Category } from '../data/categories';
import { categoryIcons } from '../data/categoryIcons';

export function CategoryTile({ category, onPress }: { category: Category; onPress: () => void }) {
  const icon = categoryIcons[category.iconKey];

  return (
    <Pressable style={styles.tile} onPress={onPress}>
      <View style={[styles.icon, !category.implemented && styles.iconDimmed]}>
        {icon ? (
          <Image source={icon} style={styles.iconImage} resizeMode="contain" />
        ) : (
          <Text style={styles.initials}>{category.label.slice(0, 2).toUpperCase()}</Text>
        )}
      </View>
      <Text style={[styles.label, !category.implemented && styles.labelDimmed]} numberOfLines={2}>
        {category.label}
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
    width: 72,
    height: 72,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#4f8ef7',
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    overflow: 'hidden',
  },
  iconDimmed: {
    borderColor: '#3a3a3a',
    opacity: 0.5,
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
  label: {
    color: '#ddd',
    fontSize: 12,
    textAlign: 'center',
  },
  labelDimmed: {
    color: '#777',
  },
});
