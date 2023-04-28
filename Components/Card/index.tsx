import React, { useEffect } from 'react';

import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native';

interface MovieCardProps {
  title: string;
  desc: string;
  poster: string;
  navigation:any;
  id:number;
 
}

const MovieCard: React.FC<MovieCardProps> = ({ title, desc, poster,navigation,id }:MovieCardProps) => {



  return (
    <TouchableOpacity onPress={
      ()=>{
        navigation.navigate('Details',{id:id})
       console.log(id)
      }
    }>
    <View style={styles.container}>
     
      <Text style={styles.title}>{title}</Text>
    
      <Image source={{ uri: poster }} style={styles.poster }   />
      
      <Text style={styles.desc}>{desc}</Text>
      
    </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    container: {
        width: 100,
      alignItems: 'center',
      margin:5,
      height:190,
      backgroundColor:'white'
     
    },
    poster: {
      width: 100,
      height: 150,
    },
    title: {
      fontSize: 6,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
      marginTop: 8,
    },
    desc: {
      fontSize: 10,
      color: '#777',
      textAlign: 'center',
      marginTop: 4,
    },
  });
export default MovieCard;