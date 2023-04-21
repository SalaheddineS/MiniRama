import React from 'react';
import { StyleSheet, View} from 'react-native';
import Welcome from './Pages/Welcome';
import Store from './ConfigureStore';
import { Provider } from 'react-redux';



export default function App() {


  return (
    <Provider store={Store} >  
   
        <Welcome />
        
      </Provider>
  );
}



