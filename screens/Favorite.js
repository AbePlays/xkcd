import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FavoriteContext } from "../context/FavoriteContext";

function Favorite() {
  const [favs, setFavs] = useState([]);
  const { getFavs, removeFromFirestore } = useContext(FavoriteContext);

  useEffect(() => {
    setFavs(getFavs());
  });

  const renderItem = ({ item }) => {
    return (
      <View style={styles.comicContainer}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            source={{ uri: item.img }}
            style={styles.image}
          />
        </View>
        <View style={styles.comicInfo}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>#{item.num}</Text>
          </View>
          <Text style={styles.pillTitle}>{item.title}</Text>
          <Text style={styles.pillSubTitle}>
            Date created : {`${item.month}/${item.year.substring(2)}`}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.trashContainer}
          onPress={() => {
            removeFromFirestore(item.num);
          }}
        >
          <Image source={require("../assets/trash.png")} style={styles.trash} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favorite</Text>
      </View>
      <FlatList
        data={favs}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.num}`}
        style={styles.list}
      />
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
    paddingTop: 40,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  list: {
    marginBottom: 60,
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
