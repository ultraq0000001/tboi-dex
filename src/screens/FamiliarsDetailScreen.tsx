import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { familiars } from '../data/familiars';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'FamiliarsDetail'>;

export function FamiliarsDetailScreen({ route }: Props) {
  const familiar = familiars.find((f) => f.id === route.params.id);

  if (!familiar) {
    return (
      <View style={styles.container}>
        <Text style={styles.missing}>Familiar not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.iconWrap}>
        <View style={styles.icon}>
          <Text style={styles.initials}>
            {familiar.name.slice(0, 2).toUpperCase()}
          </Text>
        </View>
      </View>
      <Text style={styles.name}>{familiar.name}</Text>
      <Text style={styles.description}>{familiar.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { padding: 20 },
  missing: { color: '#888', textAlign: 'center', marginTop: 40 },
  iconWrap: { alignItems: 'center', marginBottom: 12 },
  icon: {
    width: 96,
    height: 96,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#4f8ef7',
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: { color: '#eee', fontWeight: '700', fontSize: 24 },
  name: { color: '#fff', fontSize: 24, fontWeight: '700', textAlign: 'center', marginTop: 12 },
  description: { color: '#ddd', fontSize: 16, lineHeight: 22, textAlign: 'center', marginTop: 12 },
});
