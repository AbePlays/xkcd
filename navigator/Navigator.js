import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Favorite from "../screens/Favorite";
import Explore from "../screens/Explore";

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;

            if (route.name === "Home") {
              icon = focused
                ? require("../assets/homeBold.png")
                : require("../assets/home.png");
            } else if (route.name === "Profile") {
              icon = focused
                ? require("../assets/userBold.png")
                : require("../assets/user.png");
            } else if (route.name === "Favorite") {
              icon = focused
                ? require("../assets/starBold.png")
                : require("../assets/star.png");
            } else {
              icon = focused
                ? require("../assets/exploreBold.png")
                : require("../assets/explore.png");
            }

            return <Image source={icon} style={{ height: 20, width: 20 }} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Tab.Screen name="Explore" component={Explore}></Tab.Screen>
        <Tab.Screen name="Favorite" component={Favorite}></Tab.Screen>
        <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
