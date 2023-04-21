import React, { useEffect,useState } from 'react';
import { ScrollView,StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import Card from '../Card';

export default function App({results,Category}:any) {

  if(results){
  return(
    <View style={{ backgroundColor: 'black', padding: 10 ,margin:12,borderColor:'white',borderRadius:20}}>
  <Text style={{ 
    textAlign: 'center', 
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'sans-serif',
    borderWidth: 1,
    borderColor: 'white',
    padding: 5,
    borderRadius: 5
  }}>{Category}</Text>
  <ScrollView horizontal={true} nestedScrollEnabled={true}>
    {results.map((item:any,index:number)=>{
      return(
        <Card
          key={index}
          title={item.title}
          poster={'https://image.tmdb.org/t/p/w500'+item.poster_path} 
          Type={''}              
        />
      )
    })}
  </ScrollView>
</View>
  )
  }
  else{
    return(
      <View>
        <Text>
          Loading
        </Text>
      </View>
    )
  }


}
