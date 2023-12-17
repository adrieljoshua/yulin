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


// TODO
// 1)Google Places API
// 2)Google Directions API
// 3)Distance Metrics API
export default function App() 
{
  // const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
     <NavigationContainer>
      <SafeAreaProvider>
      {/* <Stack.Navigator>
        <Stack.Screen 
          name='HomeScreen'
          component={HomeScreen}
          options ={{
            headerShown:false,
          }}
        />
        <Stack.Screen 
          name='MapScreen'
          component={MapScreen}
          options ={{
            headerShown:false,
          }}
        />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
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
