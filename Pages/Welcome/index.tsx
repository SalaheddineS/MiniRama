import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import Store from "../../ConfigureStore";
import { useDispatch, useSelector } from "react-redux";
import { fetchFamousMovies } from "../../ReduxSlices/FamousMovies";
import { fetchLatestMovies } from "../../ReduxSlices/LatestReleases";
import { fetchTopRated } from "../../ReduxSlices/TopRated";
import CardSection from "../../Components/CardSection";

export default function App({ navigation }: any) {
  type AppDispatch = typeof Store.dispatch;
  const useAppDispatch = () => useDispatch<AppDispatch>();

  const dispatch = useAppDispatch();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=318ecf5761c926ad8559bb90686c2aef"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.genres.map((item:any) => {
          SetsCategories((Categories:any) => [...Categories, item]);
        })
      });
    dispatch(fetchFamousMovies());
    dispatch(fetchLatestMovies());
    dispatch(fetchTopRated());
  }, [dispatch]);
  const movies = useSelector((state: any) => state.Famous);
  const latest = useSelector((state: any) => state.Latest);
  const topRated = useSelector((state: any) => state.TopRated);

  const [searched, setSearched] = useState("");
  const [movieRes, setMovieRes] = useState({});
  const [Categories, SetsCategories]:any = useState([]);
  const Search = (event: any) => {
    const researchedMovies: string = event.nativeEvent.text;
    const url =
      "https://api.themoviedb.org/3/search/movie?api_key=318ecf5761c926ad8559bb90686c2aef&query=" +
      researchedMovies;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        setSearched(researchedMovies);
        setMovieRes(responseJson.results);
      });
  };

  if(Categories.length>0){
  return (
    <View style={{ backgroundColor: "#1a1a1a", flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          console.log(Categories.length);
        }}
      >
        <View
          style={{
            height: 60,
            backgroundColor: "#660000",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "black",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>
            MINIRAMA
          </Text>
        </View>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator style={{ marginTop: 60 }}>
        <TextInput
          style={styles.input}
          placeholder="Search for movie"
          onSubmitEditing={(event) => {
            Search(event);
          }}
        />
 <ScrollView horizontal={true} style={styles.scrollView}>
  {Categories.map((category:any) => (
    <TouchableOpacity key={category} onPress={() => console.log("pressed")} style={styles.categoryButton}>
      <Text style={styles.categoryText}>{category.name}</Text>
    </TouchableOpacity>
  ))}
</ScrollView>
        {searched === "" && (
          <>
            <CardSection
              navigation={navigation}
              Category="Famous Movies"
              results={movies.data.results}
            />
            <CardSection
              navigation={navigation}
              Category="Latest Movies"
              results={latest.data.results}
            />
            <CardSection
              navigation={navigation}
              Category="Top Rated"
              results={topRated.data.results}
            />
          </>
        )}

        {searched !== "" && (
          <>
            <CardSection
              navigation={navigation}
              Category="Search Results"
              results={movieRes}
            />
          </>
        )}
      </ScrollView>
    </View>
  );}
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  scrollView: {
    backgroundColor: 'black',
    padding: 10,
  },
  categoryButton: {
    backgroundColor: '#660000',
    borderRadius: 20,
    padding: 10,
    margin: 5,
  },
  categoryText: {
    color: 'white',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 16,
  }
});
