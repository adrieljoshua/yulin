import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OtherScreen from './screens/OtherScreen'


// TODO
// 1)Google Places API
// 2)Google Directions API
// 3)Distance Metrics API
export default function App() 
{
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

    const HomeStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="OtherScreen" component={OtherScreen} />
    </Stack.Navigator>
  );

  return (
    <Provider store={store}>
     <NavigationContainer>
      <SafeAreaProvider>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="HomeScreen" component={HomeStack} />
          <Tab.Screen name="MapScreen" component={MapScreen} />
          <Tab.Screen name="Payment" component={HomeScreen} />
          <Tab.Screen name="Orders" component={MapScreen} />
          <Tab.Screen name="Profile" component={MapScreen} />
        </Tab.Navigator>
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
