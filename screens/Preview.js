import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function Preview() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require("../assets/left-arrow.png")}
            style={styles.imageIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Yogurt</Text>
        <TouchableOpacity>
          <Image
            source={require("../assets/star.png")}
            style={styles.imageIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/yogurt.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Comic Number : </Text>
        <Text style={styles.subTitle}>#737</Text>
        <View style={styles.bar}></View>
        <Text style={styles.title}>Image URL : </Text>
        <Text style={styles.subTitle}>https://yashvorabewafahai.com</Text>
      </View>
    </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  imageIcon: {
    width: 20,
    height: 20,
  },
  headerText: {
    fontSize: 25,
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
  bottomContainer: {
    paddingHorizontal: 30,
  },
  title: {
    opacity: 0.5,
    fontWeight: "bold",
    fontSize: 18,
  },
  subTitle: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 20,
  },
  bar: {
    marginVertical: 10,
    height: 1,
    backgroundColor: "#eee",
  },
});

export default Preview;
