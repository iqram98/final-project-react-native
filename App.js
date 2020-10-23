import React from "react";
import { DataProvider } from "./components/DataContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Detail from "./components/Detail";
import Splash from "./components/Splash";

const Main = createStackNavigator();
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Detail" component={Detail} />
  </HomeStack.Navigator>
);

const Tabs = createMaterialBottomTabNavigator();
const TabsStackScreen = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    activeColor="#0A0F1F"
    inactiveColor="#727C8E"
    barStyle={{ backgroundColor: "white" }}
  >
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tabs.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="account-circle"
            color={color}
            size={26}
          />
        ),
      }}
    />
  </Tabs.Navigator>
);

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Main.Navigator screenOptions={{ headerShown: false }}>
          <Main.Screen name="Splash" component={Splash} />
          <Main.Screen name="Login" component={Login} />
          <Main.Screen name="Home" component={TabsStackScreen} />
        </Main.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
