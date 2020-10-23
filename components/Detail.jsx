import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Zocial";
import { DataContext } from "./DataContext";

export default Detail = ({ route, navigation }) => {
  const { movieId } = route.params;
  const [font, datas, setDatas] = useContext(DataContext);
  const [detailData, setDetailData] = useState(null);

  getDate = () => {
    let d = new Date(detailData.release_date);
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  };

  useEffect(() => {
    if (detailData === null) {
      for (var i = 0; i < datas.results.length; i++) {
        if (datas.results[i].id === movieId) {
          setDetailData(datas.results[i]);
        }
      }
    }
  });

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.movieApps}>Movie Apps</Text>
      {detailData != null ? (
        <ImageBackground
          imageStyle={{ opacity: 0.2 }}
          style={styles.backImg}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${detailData.backdrop_path}`,
          }}
        >
          <Image
            style={styles.descImg}
            source={{
              uri:
                detailData.poster_path == null
                  ? "https://lh3.googleusercontent.com/proxy/0qXkMdtpnHDs9k8yDG5R5_2NUmhfu-H7puj6sqH-b9HGBLGH9K-DEHn-ZvsdkuNF7yz6RmdOzykZkqbCPvqAspL5uqKYXoyYsFJrKL2YqTLZlTZt25lH9GM9BQ"
                  : `https://image.tmdb.org/t/p/w500/${detailData.poster_path}`,
            }}
          />
          <Text style={styles.descTitle}>{detailData.title}</Text>
          <Text style={styles.descSecond}>{`Release Date: ${getDate()}`}</Text>
          <Text
            style={styles.descSecond}
          >{`Popularity: ${detailData.popularity}`}</Text>
          <Text
            style={styles.descSecond}
          >{`Vote Average: ${detailData.vote_average}`}</Text>
          <Text
            style={styles.descSecond}
          >{`Overview: ${detailData.overview}`}</Text>
        </ImageBackground>
      ) : (
        <Text style={{ color: "white" }}>Loading...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0F1F",
  },
  movieApps: {
    color: "white",
    fontFamily: "rancho",
    fontSize: 42,
    alignSelf: "flex-end",
    marginBottom: 50,
    marginRight: 20,
  },
  backImg: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 10,
  },
  descImg: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  descTitle: {
    fontSize: 40,
    color: "white",
    fontFamily: "rosario",
  },
  descSecond: {
    color: "#dfdfdf",
    fontSize: 20,
    fontFamily: "rosario",
    alignSelf: "flex-start",
    marginHorizontal: 10,
  },
});
