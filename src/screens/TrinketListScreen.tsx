import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { trinkets } from '../data/trinkets';
import { TrinketTile } from '../components/TrinketTile';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'TrinketList'>;

export function TrinketListScreen({ navigation }: Props) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return trinkets;
    return trinkets.filter((trinket) => trinket.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search trinkets..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
        autoCorrect={false}
      />
      <FlatList
        data={filtered}
        keyExtractor={(trinket) => trinket.id}
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TrinketTile
            trinket={item}
            onPress={() => navigation.navigate('TrinketDetail', { trinketId: item.id })}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No trinkets match "{query}"</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  search: {
    margin: 12,
    marginBottom: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#1e1e1e',
    color: '#fff',
    fontSize: 16,
  },
  list: { paddingHorizontal: 8, paddingBottom: 24 },
  empty: { color: '#888', textAlign: 'center', marginTop: 40 },
});