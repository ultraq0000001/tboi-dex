import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { ItemListScreen } from './src/screens/ItemListScreen';
import { ItemDetailScreen } from './src/screens/ItemDetailScreen';
import { TrinketListScreen } from './src/screens/TrinketListScreen';
import { TrinketDetailScreen } from './src/screens/TrinketDetailScreen';
import { AchievementsListScreen } from './src/screens/AchievementsListScreen';
import { AchievementsDetailScreen } from './src/screens/AchievementsDetailScreen';
import { FamiliarsListScreen } from './src/screens/FamiliarsListScreen';
import { FamiliarsDetailScreen } from './src/screens/FamiliarsDetailScreen';
import { ChallengesListScreen } from './src/screens/ChallengesListScreen';
import { ChallengesDetailScreen } from './src/screens/ChallengesDetailScreen';
import { ObjectsListScreen } from './src/screens/ObjectsListScreen';
import { ObjectsDetailScreen } from './src/screens/ObjectsDetailScreen';
import { PickupsListScreen } from './src/screens/PickupsListScreen';
import { PickupsDetailScreen } from './src/screens/PickupsDetailScreen';
import { PillsListScreen } from './src/screens/PillsListScreen';
import { PillsDetailScreen } from './src/screens/PillsDetailScreen';
import { ComingSoonScreen } from './src/screens/ComingSoonScreen';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerStyle: { backgroundColor: '#1a1a1a' } }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'TBOI PockeDEX' }} />
        <Stack.Screen name="ItemList" component={ItemListScreen} options={{ title: 'Items' }} />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetailScreen}
          options={{ title: 'Item Details' }}
        />
        <Stack.Screen name="TrinketList" component={TrinketListScreen} options={{ title: 'Trinkets' }} />
        <Stack.Screen
          name="TrinketDetail"
          component={TrinketDetailScreen}
          options={{ title: 'Trinket Details' }}
        />
        <Stack.Screen
          name="AchievementsList"
          component={AchievementsListScreen}
          options={{ title: 'Achievements' }}
        />
        <Stack.Screen
          name="AchievementsDetail"
          component={AchievementsDetailScreen}
          options={{ title: 'Achievement Details' }}
        />
        <Stack.Screen
          name="FamiliarsList"
          component={FamiliarsListScreen}
          options={{ title: 'Familiars' }}
        />
        <Stack.Screen
          name="FamiliarsDetail"
          component={FamiliarsDetailScreen}
          options={{ title: 'Familiar Details' }}
        />
        <Stack.Screen
          name="ChallengesList"
          component={ChallengesListScreen}
          options={{ title: 'Challenges' }}
        />
        <Stack.Screen
          name="ChallengesDetail"
          component={ChallengesDetailScreen}
          options={{ title: 'Challenge Details' }}
        />
        <Stack.Screen
          name="ObjectsList"
          component={ObjectsListScreen}
          options={{ title: 'Objects' }}
        />
        <Stack.Screen
          name="ObjectsDetail"
          component={ObjectsDetailScreen}
          options={{ title: 'Object Details' }}
        />
        <Stack.Screen
          name="PickupsList"
          component={PickupsListScreen}
          options={{ title: 'Pick Ups' }}
        />
        <Stack.Screen
          name="PickupsDetail"
          component={PickupsDetailScreen}
          options={{ title: 'Pickup Details' }}
        />
        <Stack.Screen
          name="PillsList"
          component={PillsListScreen}
          options={{ title: 'Pills' }}
        />
        <Stack.Screen
          name="PillsDetail"
          component={PillsDetailScreen}
          options={{ title: 'Pill Details' }}
        />
        <Stack.Screen
          name="ComingSoon"
          component={ComingSoonScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
