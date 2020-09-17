import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";

function Explore() {
  return <View></View>;
}
function Favorite() {
  return <View></View>;
}
function Account() {
  return <View></View>;
}

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
            } else if (route.name === "Account") {
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
        <Tab.Screen name="Account" component={Account}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
