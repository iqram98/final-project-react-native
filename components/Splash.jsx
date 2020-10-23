import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";
import { DataContext } from "./DataContext";

export default App = ({ navigation }) => {
  const [font, datas, setDatas] = useContext(DataContext);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login")
    }, 3000);
  })

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.movieApps}>Movie Apps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A0F1F",
  },
  movieApps: {
    color: "white",
    fontFamily: "rancho",
    fontSize: 42,
    marginBottom: 50,
    marginRight: 20,
  },
});
