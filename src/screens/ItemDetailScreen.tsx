import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { items } from '../data/items';
import { PixelIcon } from '../components/PixelIcon';
import { QualityStars } from '../components/QualityStars';
import { TYPE_LABELS, TYPE_COLORS } from '../data/itemTypes';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'ItemDetail'>;

export function ItemDetailScreen({ route }: Props) {
  const item = items.find((i) => i.id === route.params.itemId);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.missing}>Item not found.</Text>
      </View>
    );
  }

  const initials = item.name
    .replace(/^(The|A)\s+/i, '')
    .slice(0, 2)
    .toUpperCase();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.iconWrap}>
        <PixelIcon iconKey={item.iconKey} size={96} initials={initials} />
      </View>
      <Text style={styles.name}>
        #{item.itemId} {item.name}
      </Text>
      <Text style={styles.quote}>{item.quote}</Text>
      <Text style={[styles.type, { color: TYPE_COLORS[item.type] }]}>
        {TYPE_LABELS[item.type]}
      </Text>
      <QualityStars quality={item.quality} />

      <Text style={styles.sectionLabel}>Effect</Text>
      <Text style={styles.description}>{item.effect}</Text>

      <Text style={styles.sectionLabel}>Unlock</Text>
      <Text style={styles.description}>{item.unlock}</Text>

      <Text style={styles.sectionLabel}>Synergy</Text>
      {item.synergies.length > 0 ? (
        item.synergies.map((synergy, index) => (
          <View key={`${synergy.item}-${index}`} style={styles.synergy}>
            {synergy.item ? <Text style={styles.synergyItem}>{synergy.item}</Text> : null}
            <Text style={styles.synergyDetails}>{synergy.details}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.description}>None</Text>
      )}

      <Text style={styles.sectionLabel}>Found In</Text>
      <View style={styles.tagRow}>
        {item.pools.map((pool) => (
          <View key={pool} style={styles.tag}>
            <Text style={styles.tagText}>{pool}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { padding: 20 },
  missing: { color: '#888', textAlign: 'center', marginTop: 40 },
  iconWrap: { alignItems: 'center', marginBottom: 12 },
  name: { color: '#fff', fontSize: 24, fontWeight: '700', textAlign: 'center' },
  quote: { color: '#888', fontSize: 14, marginTop: 8, marginBottom: 4, textAlign: 'center' },
  type: { fontSize: 14, marginTop: 2, marginBottom: 10, fontWeight: '600', textAlign: 'center' },
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
  synergy: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  synergyItem: { color: '#4f8ef7', fontSize: 14, fontWeight: '700', marginBottom: 2 },
  synergyDetails: { color: '#ccc', fontSize: 14, lineHeight: 19 },
});