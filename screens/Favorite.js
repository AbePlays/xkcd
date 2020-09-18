import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function Favorite() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favorite</Text>
      </View>
      <View style={styles.comicContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            source={require("../assets/yogurt.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.comicInfo}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>#737</Text>
          </View>
          <Text style={styles.pillTitle}>Yogurt</Text>
          <Text style={styles.pillSubTitle}>Date created : 5/20</Text>
        </View>
        <TouchableOpacity style={styles.trashContainer}>
          <Image source={require("../assets/trash.png")} style={styles.trash} />
        </TouchableOpacity>
      </View>
      <View style={styles.comicContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            source={require("../assets/yogurt.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.comicInfo}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>#737</Text>
          </View>
          <Text style={styles.pillTitle}>Yogurt</Text>
          <Text style={styles.pillSubTitle}>Date created : 5/20</Text>
        </View>
        <TouchableOpacity style={styles.trashContainer}>
          <Image source={require("../assets/trash.png")} style={styles.trash} />
        </TouchableOpacity>
      </View>
      <View style={styles.comicContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            source={require("../assets/yogurt.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.comicInfo}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>#737</Text>
          </View>
          <Text style={styles.pillTitle}>Yogurt</Text>
          <Text style={styles.pillSubTitle}>Date created : 5/20</Text>
        </View>
        <TouchableOpacity style={styles.trashContainer}>
          <Image source={require("../assets/trash.png")} style={styles.trash} />
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
  comicContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    position: "relative",
  },
  imageContainer: {
    borderRadius: 5,
    height: 70,
    width: 70,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
  },
  image: {
    borderRadius: 5,
    height: 65,
    width: 65,
  },
  comicInfo: {
    justifyContent: "space-between",
  },
  pill: {
    backgroundColor: "#D1E9FE",
    width: 60,
    height: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pillText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  pillTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  pillSubTitle: {
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.5,
  },
  trashContainer: {
    position: "absolute",
    right: 20,
    bottom: 10,
  },
  trash: {
    height: 20,
    width: 20,
  },
});

export default Favorite;
