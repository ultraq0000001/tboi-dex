import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { items } from '../data/items';
import { itemIcons } from '../data/itemIcons';
import { QualityStars } from '../components/QualityStars';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'ItemDetail'>;

const TYPE_LABELS: Record<string, string> = {
  passive: 'Passive Item',
  active: 'Active Item',
  trinket: 'Trinket',
  familiar: 'Familiar',
};

export function ItemDetailScreen({ route }: Props) {
  const item = items.find((i) => i.id === route.params.itemId);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.missing}>Item not found.</Text>
      </View>
    );
  }

  const icon = itemIcons[item.iconKey];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {icon && <Image source={icon} style={styles.icon} resizeMode="contain" />}
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.type}>{TYPE_LABELS[item.type]}</Text>
      <QualityStars quality={item.quality} />

      <Text style={styles.sectionLabel}>Effect</Text>
      <Text style={styles.description}>{item.description}</Text>

      <Text style={styles.sectionLabel}>Found In</Text>
      <View style={styles.tagRow}>
        {item.pools.map((pool) => (
          <View key={pool} style={styles.tag}>
            <Text style={styles.tagText}>{pool}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionLabel}>Unlock</Text>
      <Text style={styles.description}>{item.unlock}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { padding: 20 },
  missing: { color: '#888', textAlign: 'center', marginTop: 40 },
  icon: { width: 96, height: 96, marginBottom: 12, alignSelf: 'center' },
  name: { color: '#fff', fontSize: 26, fontWeight: '700' },
  type: { color: '#888', fontSize: 14, marginTop: 4, marginBottom: 10 },
  sectionLabel: {
    color: '#666',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: 20,
    marginBottom: 6,
  },
  description: { color: '#ddd', fontSize: 16, lineHeight: 22 },
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: {
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  tagText: { color: '#ccc', fontSize: 13 },
});
