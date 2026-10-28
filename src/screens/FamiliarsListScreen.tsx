import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { familiars } from '../data/familiars';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'FamiliarsList'>;

export function FamiliarsListScreen({ navigation }: Props) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return familiars;
    return familiars.filter((f) => f.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search familiars..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
        autoCorrect={false}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            style={styles.tile}
            onPress={() => navigation.navigate('FamiliarsDetail', { id: item.id })}
          >
            <View style={styles.icon}>
              <Text style={styles.initials}>
                {item.name.slice(0, 2).toUpperCase()}
              </Text>
            </View>
            <Text style={styles.name} numberOfLines={2}>
              {item.name}
            </Text>
          </Pressable>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No familiars match "{query}"</Text>}
      />
    </View>
  );
}

import { Pressable } from 'react-native';

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
    borderColor: '#4f8ef7',
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    overflow: 'hidden',
  },
  initials: { color: '#eee', fontWeight: '700', fontSize: 18 },
  name: { color: '#ddd', fontSize: 12, textAlign: 'center' },
  empty: { color: '#888', textAlign: 'center', marginTop: 40 },
});
