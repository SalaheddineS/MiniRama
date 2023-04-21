import React, { useEffect } from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import Store from "../../ConfigureStore";
import { useDispatch, useSelector } from "react-redux";
import { fetchFamousMovies } from "../../ReduxSlices/FamousMovies";
import { fetchLatestMovies } from "../../ReduxSlices/LatestReleases";
import { fetchTopRated } from "../../ReduxSlices/TopRated";
import CardSection from "../../Components/CardSection";

export default function App() {
  type AppDispatch = typeof Store.dispatch;
  const useAppDispatch = () => useDispatch<AppDispatch>();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFamousMovies());
    dispatch(fetchLatestMovies());
    dispatch(fetchTopRated());
  }, [dispatch]);
  const movies = useSelector((state: any) => state.Famous);
  const latest = useSelector((state: any) => state.Latest);
  const topRated = useSelector((state: any) => state.TopRated);

  return (
    <View style={{ backgroundColor: '#9e1624', flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator style={{marginTop:10}} >
        <CardSection Category="Famous Movies" results={movies.data.results} />
        <CardSection Category="Latest Movies" results={latest.data.results} />
        <CardSection Category="Top Rated" results={topRated.data.results} />
      </ScrollView>
    </View>
  );
}