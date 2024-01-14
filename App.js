import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import OtherScreen from './screens/OtherScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// TODO
// 1)Google Places API
// 2)Google Directions API
// 3)Distance Metrics API
export default function App() 
{
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

    const screenOptions = {
    tabBarStyle:{
      // backgroundColor:'#663399',
      height:60,
    },
    headerShown:false,
    tabBarItemStyle:{
      activeTintColor:'#663399',
      
      // margin:5,
      // borderRadius:10,
    }
  };

    const HomeStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}} tabBarActiveBackgroundColor='#663399'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="OtherScreen" component={OtherScreen} />
    </Stack.Navigator>
  );

  return (
    <Provider store={store}>
     <NavigationContainer>
      <SafeAreaProvider>
         <Tab.Navigator 
      screenOptions={{ headerShown: false, tabBarActiveTintColor:'#663399', tabBarStyle:{height:60}, 
        // Additional styling options...
      }} 
    >
          <Tab.Screen name="HomeScreen" component={HomeStack} options={{
                                                            tabBarIcon: ({ color, size }) => (
                                                              <Ionicons name="ios-home" size={size} color={color} />
                                                            ), 
        }} />
          <Tab.Screen name="MapScreen" component={MapScreen} options={{
                                                            tabBarIcon: ({ color, size }) => (
                                                              <Ionicons name="ios-location" size={size} color={color} />
                                                            ),
        }} />
          <Tab.Screen name="Payment" component={HomeScreen} options={{
                                                            tabBarIcon: ({ color, size }) => (
                                                              <Ionicons name="ios-card" size={size} color={color} />
                                                            ),
        }}/>
          <Tab.Screen name="Orders" component={MapScreen} options={{
                                                            tabBarIcon: ({ color, size }) => (
                                                              <Ionicons name="ios-book" size={size} color={color} />
                                                            ),
        }}/>
          <Tab.Screen name="Profile" component={MapScreen} options={{
                                                            tabBarIcon: ({ color, size }) => (
                                                              <Ionicons name="ios-people" size={size} color={color} />
                                                            ),
        }}/>
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
