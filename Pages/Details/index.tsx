import React, { useEffect, useState } from "react";
import StarRating from "react-native-star-rating-widget";

import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

interface DetailProps {
  title: string;
  desc: string;
  poster: string;
}

const Detail: React.FC = (id: any) => {
  const [movieDetails, setMovieDetails]: any = useState({});
  const [trailler, setTrailler]: any = useState({});
  useEffect(() => {
    console.log();
    fetch(
      `https://api.themoviedb.org/3/movie/${id.route.params.id}?api_key=318ecf5761c926ad8559bb90686c2aef`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovieDetails(json);
        console.log(json);
      })
      .then(() => {
        fetch(
          `https://api.themoviedb.org/3/movie/${id.route.params.id}/videos?api_key=318ecf5761c926ad8559bb90686c2aef&language=en-US`
        )
          .then((response) => response.json())
          .then((res) => {
            setTrailler(res.results[0].key);
          });
      });
  }, []);

  if (movieDetails && trailler) {
    return (
      <ScrollView>
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

        <YoutubePlayer
          height={300}
          play={false}
          videoId={trailler}
          webViewStyle={{ borderRadius: 10, marginTop: 70 }}
        />
        <View style={styles.container}>
          <Text style={styles.title}>{movieDetails.title}</Text>
          <StarRating
            maxStars={5}
            color="red"
            rating={movieDetails.vote_average/2}
            onChange={function (rating: number): void {
              throw new Error("Function not implemented.");
            }}
          />
          <View style={styles.divider} />
          <Image
            source={{
              uri: "https://image.tmdb.org/t/p/w500" + movieDetails.poster_path,
            }}
            style={styles.poster}
          />

          <View style={styles.divider} />
          <Text style={styles.litteraldescription}>Description</Text>
          <View style={styles.divider} />
          <Text style={styles.description}>{movieDetails.overview} </Text>
          <View style={styles.divider} />
        
          <Text style={styles.litteraldescription}>genre</Text>
          <View style={styles.divider} />
          <Text style={styles.description}>
            {movieDetails.genres &&
              movieDetails.genres.map((genre: any) => {
                return genre.name + " ";
              })}
          </Text>
          <View style={styles.divider} />
        
        <Text style={styles.litteraldescription}>Languages</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
            {movieDetails.spoken_languages &&
              movieDetails.spoken_languages.map((languages: any) => {
                return languages.english_name + " ";
              })}
          </Text>
        
          
        </View>
      </ScrollView>
    );
  } else {
    return <Text>loading</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    alignItems: "center",
    margin: 5,

    backgroundColor: "#F5F5F5",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
  },
  poster: {
    width: 300,
    height: 450,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 8,
    fontFamily: "Helvetica",
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
    color: "black",
    backgroundColor: "#F5F5F5",
    borderColor: "#000000",

    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  litteraldescription: {
    fontSize: 20,
  },
});

export default Detail;
