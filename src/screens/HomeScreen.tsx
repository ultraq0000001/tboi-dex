import { FlatList, StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { categories } from '../data/categories';
import { CategoryTile } from '../components/CategoryTile';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(category) => category.key}
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={({ item: category }) => (
          <CategoryTile
            category={category}
            onPress={() => {
              if (category.key === 'items') return navigation.navigate('ItemList');
              if (category.key === 'trinkets') return navigation.navigate('TrinketList');
              navigation.navigate('ComingSoon', { title: category.label });
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  list: { padding: 8, paddingBottom: 24 },
});
