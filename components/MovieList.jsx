import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default MovieList = ({ data, navigation }) => {
  getDate = () => {
    let d = new Date(data.release_date);
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
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          movieId: data.id,
        })
      }
      style={{ width: "100%" }}
    >
      <View style={styles.container}>
        <Image
          style={styles.dataImg}
          source={{
            uri:
              data.poster_path == null
                ? "https://lh3.googleusercontent.com/proxy/0qXkMdtpnHDs9k8yDG5R5_2NUmhfu-H7puj6sqH-b9HGBLGH9K-DEHn-ZvsdkuNF7yz6RmdOzykZkqbCPvqAspL5uqKYXoyYsFJrKL2YqTLZlTZt25lH9GM9BQ"
                : `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
          }}
        />
        <View style={styles.desc}>
          <Text style={styles.descTitle}>{data.title}</Text>
          <Text style={styles.descSecond}>{getDate()}</Text>
          <Text style={styles.descSecond}>Popularity : {data.popularity}</Text>
          <Text style={styles.descVote}>{data.vote_average + "%"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  dataImg: {
    width: 100,
    height: 100,
  },
  desc: {
    flex: 1,
    paddingHorizontal: 10,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  descTitle: {
    fontFamily: "rosario",
    fontSize: 18,
    color: "white",
  },
  descSecond: {
    fontSize: 14,
    color: "gray",
  },
  descVote: {
    fontSize: 18,
    color: "yellow",
  },
});
