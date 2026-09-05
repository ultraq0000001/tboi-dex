import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { trinkets } from '../data/trinkets';
import { PixelIcon } from '../components/PixelIcon';
import { QualityStars } from '../components/QualityStars';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'TrinketDetail'>;

export function TrinketDetailScreen({ route }: Props) {
  const trinket = trinkets.find((t) => t.id === route.params.trinketId);

  if (!trinket) {
    return (
      <View style={styles.container}>
        <Text style={styles.missing}>Trinket not found.</Text>
      </View>
    );
  }

  const initials = trinket.name
    .replace(/^(The|A)\s+/i, '')
    .slice(0, 2)
    .toUpperCase();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.iconWrap}>
        <PixelIcon iconKey={trinket.iconKey} size={96} initials={initials} />
      </View>
      <Text style={styles.name}>{trinket.name}</Text>
      <Text style={styles.type}>Trinket</Text>
      <QualityStars quality={trinket.quality} />

      <Text style={styles.sectionLabel}>Quote</Text>
      <Text style={styles.description}>{trinket.quote}</Text>

      <Text style={styles.sectionLabel}>Effect</Text>
      <Text style={styles.description}>{trinket.effect}</Text>

      <Text style={styles.sectionLabel}>Unlock</Text>
      <Text style={styles.description}>{trinket.unlock}</Text>

      {trinket.addedIn ? (
        <>
          <Text style={styles.sectionLabel}>Added In</Text>
          <Text style={styles.description}>{trinket.addedIn}</Text>
        </>
      ) : null}

      {trinket.pools.length > 0 ? (
        <>
          <Text style={styles.sectionLabel}>Found In</Text>
          <View style={styles.tagRow}>
            {trinket.pools.map((pool) => (
              <View key={pool} style={styles.tag}>
                <Text style={styles.tagText}>{pool}</Text>
              </View>
            ))}
          </View>
        </>
      ) : null}

      {trinket.synergies.length > 0 ? (
        <>
          <Text style={styles.sectionLabel}>Synergies</Text>
          {trinket.synergies.map((synergy, index) => (
            <View key={index} style={styles.synergy}>
              <Text style={styles.synergyItem}>{synergy.item}</Text>
              <Text style={styles.synergyDetails}>{synergy.details}</Text>
            </View>
          ))}
        </>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { padding: 20 },
  missing: { color: '#888', textAlign: 'center', marginTop: 40 },
  iconWrap: { alignItems: 'center', marginBottom: 12 },
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
  synergy: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  synergyItem: { color: '#f7c04f', fontSize: 14, fontWeight: '700', marginBottom: 2 },
  synergyDetails: { color: '#ccc', fontSize: 14, lineHeight: 19 },
});