import { FlatList, StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { categories } from '../data/categories';
import { CategoryTile } from '../components/CategoryTile';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

type ImplementedCategoryKey = Extract<
  keyof RootStackParamList,
  `${string}List`
>;

const ROUTE_BY_KEY: Partial<Record<string, ImplementedCategoryKey>> = {
  items: 'ItemList',
  trinkets: 'TrinketList',
  achievements: 'AchievementsList',
  familiars: 'FamiliarsList',
  challenges: 'ChallengesList',
  objects: 'ObjectsList',
  pickups: 'PickupsList',
  pills: 'PillsList',
};

export function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(category) => category.key}
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={({ item: category }) => {
          const route = ROUTE_BY_KEY[category.key];
          return (
            <CategoryTile
              category={category}
              onPress={() => {
                if (route) {
                  navigation.navigate(route);
                } else {
                  navigation.navigate('ComingSoon', { title: category.label });
                }
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  list: { padding: 8, paddingBottom: 24 },
});
