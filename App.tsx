import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { ItemListScreen } from './src/screens/ItemListScreen';
import { ItemDetailScreen } from './src/screens/ItemDetailScreen';
import { TrinketListScreen } from './src/screens/TrinketListScreen';
import { TrinketDetailScreen } from './src/screens/TrinketDetailScreen';
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
          name="ComingSoon"
          component={ComingSoonScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
