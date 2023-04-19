import React from 'react';

import { View, Text, Image,StyleSheet } from 'react-native';

interface MovieCardProps {
  title: string;
  Type: string;
  poster: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, Type, poster }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: poster }} style={styles.poster } />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.type}>{Type}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        width: 100,
      alignItems: 'center',
      margin:5,
      height:150,
      backgroundColor:'white'
     
    },
    poster: {
      width: 100,
      height: 150,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      marginTop: 8,
    },
    type: {
      fontSize: 14,
      color: '#777',
      textAlign: 'center',
      marginTop: 4,
    },
  });
export default MovieCard;