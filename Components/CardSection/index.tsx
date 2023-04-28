import React, { useEffect,useState } from 'react';
import { ScrollView,StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import Card from '../Card';

export default function App({results,Category,navigation}:any) {

  if(results){
  return(
    <View style={{ backgroundColor: '#d9d9d9', padding: 10 ,marginTop:12,margin:8,borderColor:'white',borderRadius:10}}>
   
  <Text style={{ 
    textAlign: 'center', 
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'sans-serif',
    borderWidth: 1,
    borderColor: 'black',
    padding: 5, 
    borderRadius: 5,
    backgroundColor: 'wheat',
  }}>{Category}</Text>
  <ScrollView horizontal={true} nestedScrollEnabled={true}>
    {results.map((item:any,index:number)=>{
      return(
        <Card
          key={index}
          title={item.title}
          poster={'https://image.tmdb.org/t/p/w500'+item.poster_path} 
          desc={item.release_date} 
          navigation={navigation}
          id={item.id}
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
