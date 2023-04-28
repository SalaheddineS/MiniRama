import React from 'react';
import { StyleSheet, View} from 'react-native';
import Welcome from './Pages/Welcome';
import Store from './ConfigureStore';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import Details from './Pages/Details';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
export default function App() {
//  return(
 //   <Provider store={Store} > 
  //  <Details />
   // <StatusBar hidden={true} />
   // </Provider>
//  )
  const Stack = createStackNavigator();
  return (
   <Provider store={Store} > 
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen  name="Welcome" component={Welcome} options={{headerShown:false}} />
          <Stack.Screen name="Details" component={Details} options={{headerShown:false}} />
          
        </Stack.Navigator>
       </NavigationContainer>
      </Provider>
  );
}



