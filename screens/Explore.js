import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function Favorite() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Explore</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/yogurt.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.controlContainer}>
        <TouchableOpacity>
          <Image
            style={styles.controlIcon}
            source={require("../assets/left.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.controlIcon}
            source={require("../assets/star.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.controlIcon}
            source={require("../assets/right.png")}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    marginVertical: 70,
    marginHorizontal: 20,
    padding: 10,
  },
  image: {
    height: 300,
    width: 350,
  },
  controlContainer: {
    width: 120,
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  controlIcon: {
    width: 20,
    height: 20,
  },
});

export default Favorite;
