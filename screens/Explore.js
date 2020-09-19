import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { FavoriteContext } from "../context/FavoriteContext";

function Favorite() {
  const [num, setNum] = useState(1);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState();

  const { addToFirestore } = useContext(FavoriteContext);

  let max = 2361,
    min = 1;

  const fetchImage = async () => {
    setLoading(true);
    try {
      let res = await fetch(`http://xkcd.com/${num}/info.0.json`);
      let data = await res.json();
      setData(data);
      setImageUrl(data.img);
      setLoading(false);
    } catch (e) {
      console.log("This is an error", e);
    }
  };

  useEffect(() => {
    fetchImage();
  }, [num]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Explore</Text>
      </View>
      <View style={styles.imageContainer}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      </View>
      <View style={styles.controlContainer}>
        <TouchableOpacity
          disabled={num == min}
          onPress={() => setNum((prevNum) => prevNum - 1)}
        >
          <Image
            style={styles.controlIcon}
            source={require("../assets/left.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addToFirestore(data);
          }}
        >
          <Image
            style={[styles.controlIcon, { width: 40, height: 40 }]}
            source={require("../assets/star.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={num == max}
          onPress={() => setNum((prevNum) => prevNum + 1)}
        >
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
    marginVertical: 70,
    marginHorizontal: 30,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderRadius: 5,
    borderColor: "#eee",
    elevation: 2,
    padding: 10,
  },
  image: {
    height: 250,
    width: 300,
  },
  controlContainer: {
    width: 250,
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  controlIcon: {
    width: 30,
    height: 30,
  },
});

export default Favorite;
