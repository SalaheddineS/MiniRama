import React, { useEffect } from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import Store from "../../ConfigureStore";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../ReduxSlices/FamousMovies";
import CardSection from "../../Components/CardSection";
export default function App() {
  type AppDispatch = typeof Store.dispatch;
  const useAppDispatch = () => useDispatch<AppDispatch>();
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  const movies = useSelector((state: any) => state.Famous);

if(movies.data.results){
  return (
    <View style={{ marginTop: 50 }}>
      <ScrollView horizontal={true}>
 
        {movies.data.results.map((item: any, index: number) => {
          return (
            <CardSection
              key={index}
              title={item.title}
              Type={item.release_date}
              poster={'https://image.tmdb.org/t/p/w500'+item.poster_path}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}}
