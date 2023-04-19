import React, { useEffect } from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import Store from "../../ConfigureStore";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../ReduxSlices/FamousMovies";

export default function App() {
  type AppDispatch = typeof Store.dispatch;
  const useAppDispatch = () => useDispatch<AppDispatch>();
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  const movies = useSelector((state: any) => state.Famous);


  return (
    <View style={{ marginTop: 50 }}>
      <ScrollView>
        <TouchableOpacity>
          <Text style={{ color: "black" }} onPress={() => {
            console.log(movies);
          }}>
            hello
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
