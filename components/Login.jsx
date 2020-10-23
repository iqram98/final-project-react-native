import React, { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Zocial";
import { DataContext } from "./DataContext";

export default App = ({ navigation }) => {
  const [font, datas, setDatas] = useContext(DataContext);
  const [input, setInput] = useState({ email: "", password: "" });
  const [users, setUser] = useState([
    {
      email: "user@mail.com",
      password: "user123",
    },
    {
      email: "admin@mail.com",
      password: "admin123",
    },
  ]);

  const handleSubmit = () => {
    if (
      users.find((user) => {
        return user.email === input.email;
      })
    ) {
      navigation.replace("Home");
    } else {
      alert("Username atau Password Salah");
      setInput({ email: "", password: "" });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.movieApps}>Movie Apps</Text>
      <View style={styles.content}>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.inputForm}>
          <Text style={{ color: "white", fontSize: 16 }}>Email</Text>
          <TextInput
            name="email"
            style={styles.inputs}
            placeholder="Your Email Here"
            placeholderTextColor="gray"
            onChangeText={(text) => setInput({ ...input, email: text })}
            value={input.email}
          />
          <Text style={{ color: "white", fontSize: 16 }}>Password</Text>
          <TextInput
            name="password"
            style={styles.inputs}
            secureTextEntry={true}
            placeholder="Your Password Here"
            placeholderTextColor="gray"
            onChangeText={(text) => setInput({ ...input, password: text })}
            value={input.password}
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.buttonSignIn}>
            <Text style={{ color: "white", fontSize: 18 }}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "white", alignSelf: "center" }}>- Or -</Text>
        <View style={styles.mediaLogin}>
          <TouchableOpacity style={styles.media}>
            <Icon name="facebook" color="white" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.media}>
            <Icon name="google" color="white" size={25} />
          </TouchableOpacity>
        </View>
      </View>
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
    alignSelf: "flex-end",
    marginBottom: 50,
    marginRight: 20,
  },
  content: {
    width: "80%",
    backgroundColor: "rgba(196, 196, 196, 0.1)",
    padding: 20,
    borderRadius: 10,
  },
  loginText: {
    color: "white",
    fontSize: 32,
    fontFamily: "rosario",
  },
  inputForm: {
    marginVertical: 30,
  },
  inputs: {
    borderBottomWidth: 1,
    borderBottomColor: "#7BD7DD",
    marginBottom: 35,
    color: "white",
  },
  buttonSignIn: {
    height: 50,
    width: "100%",
    backgroundColor: "#7BD7DD",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  mediaLogin: {
    alignSelf: "center",
    width: "50%",
    marginTop: 20,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  media: {
    height: 50,
    width: 50,
    backgroundColor: "#7BD7DD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
