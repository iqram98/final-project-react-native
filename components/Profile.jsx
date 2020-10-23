import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { DataContext } from "./DataContext";

export default Profile = ({ navigation }) => {
  const [font, datas, setDatas] = useContext(DataContext);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.meImage}>
          <Image
            source={require("../assets/img/photo.jpg")}
            style={{ width: 95, height: 95, borderRadius: 50 }}
          />
        </View>
        <View style={styles.meDesc}>
          <Text style={[styles.meName, styles.meText]}>Iqram Nugraha</Text>
          <Text style={styles.meText}>Maros, Sulawesi Selatan</Text>
          <Text style={styles.meText}>Mobile App Developer</Text>
        </View>
      </View>
      <View style={styles.paper}>
        <View style={styles.find}>
          <Text style={{ color: "white" }}>Find Me On :</Text>
          <TouchableOpacity style={styles.box}>
            <View style={styles.iconMedia}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/Google.png")}
              />
            </View>
            <Text style={{ color: "white" }}>iqram7898@gmail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <View style={styles.iconMedia}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/Facebook.png")}
              />
            </View>
            <Text style={{ color: "white" }}>Iqram Nugraha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <View style={styles.iconMedia}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/Instagram.png")}
              />
            </View>
            <Text style={{ color: "white" }}>@iqram_nugraha</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.another}>
          <Text style={{ color: "white" }}>Looking For Another Apps?</Text>
          <TouchableOpacity style={styles.box}>
            <View style={styles.iconMedia}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/Github_black.png")}
              />
            </View>
            <Text style={{ color: "white" }}>iqram98</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace("Login")}
        style={styles.logoutButton}
      >
        <Text style={{ color: "white", fontFamily: "rosario", fontSize: 20 }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A0F1F",
    paddingVertical: 20,
  },
  header: {
    width: "80%",
    flexDirection: "row",
  },
  meImage: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  meDesc: {
    marginLeft: 20,
    justifyContent: "center",
  },
  meName: {
    fontSize: 30,
  },
  meText: {
    color: "white",
    paddingVertical: 5,
    fontFamily: "rosario",
  },
  paper: {
    marginTop: 50,
    paddingHorizontal: 20,
    marginHorizontal: 50,
    width: "90%",
    backgroundColor: "rgba(196, 196, 196, 0.1)",
    borderRadius: 10,
    justifyContent: "center",
    elevation: 5,
    flex: 1,
  },
  box: {
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    elevation: 5,
    backgroundColor: "#0A0F1F",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  iconMedia: {
    width: 40,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 50,
    backgroundColor: "white",
  },
  find: {
    height: "70%",
  },
  logoutButton: {
    marginTop: 40,
    height: 50,
    width: "90%",
    backgroundColor: "#7BD7DD",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
