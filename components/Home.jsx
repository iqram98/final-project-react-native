import React, { useContext, useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, StatusBar } from "react-native";
import { DataContext } from "./DataContext";
import MovieList from "./MovieList";
import axios from "axios";

export default Home = ({ navigation }) => {
  const [font, datas, setDatas] = useContext(DataContext);

  useEffect(() => {
    if (datas === null) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=06f9b03a0d553d19b0756ab2b2fb5c93&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        )
        .then((res) => {
          setDatas(res.data);
        });
    }
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.movieApps}>Movie Apps</Text>
      <Text style={{ color: "white", alignSelf: "flex-start", fontSize: 20 }}>
        Popular Movie
      </Text>
      {datas != null ? (
        <FlatList
          style={{ width: "100%" }}
          data={datas.results}
          renderItem={(data) => (
            <MovieList navigation={navigation} data={data.item} />
          )}
          keyExtractor={(data) => data.id.toString()}
        />
      ) : (
        <Text style={{ color: "white", fontSize: 20 }}>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A0F1F",
    paddingHorizontal: 10,
  },
  movieApps: {
    color: "white",
    fontFamily: "rancho",
    fontSize: 42,
    alignSelf: "flex-end",
    marginBottom: 50,
    marginRight: 20,
  },
});
