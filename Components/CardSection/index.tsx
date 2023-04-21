import React, { useEffect,useState } from 'react';
import { ScrollView,StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import Card from '../Card';

export default function App({poster}:any) {

  return(
    <View >
        <ScrollView>
        
            <Card title={''} Type={""} poster={poster}/>
        </ScrollView>
        </View>    
  )


}
