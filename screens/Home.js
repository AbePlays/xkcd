import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  YellowBox,
  ActivityIndicator,
} from "react-native";
import { UserContext } from "../context/UserContext";

YellowBox.ignoreWarnings(["Setting a timer"]);

function Home() {
  const [loading, setLoading] = useState(true);
  const [comicNumber, setComicNumber] = useState();
  const [comicTitle, setComicTitle] = useState();
  const [comicDate, setComicDate] = useState();
  const [imageUrl, setImageUrl] = useState();

  const { user } = useContext(UserContext);
  const name = user.name.split(" ")[0];

  const fetchData = async () => {
    try {
      let res = await fetch(`http://xkcd.com/info.0.json`);
      let data = await res.json();
      setComicNumber(data.num);
      setComicTitle(data.title);
      setComicDate(data.month + "/" + data.year.substring(2));
      setImageUrl(data.img);
      setLoading(false);
    } catch (e) {
      console.log("This is an error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hi {name},</Text>
        <Text style={styles.headerSubTitle}>Welcome Back 👋</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput placeholder="🔍     Search comic" style={styles.input} />
        <Text>
          Each xkcd comic comes with an ID tag alonside it. Enter ID of the
          comic to search OR tap the favorites button in the tab bar to view
          your favorite xkcd comics.
        </Text>
      </View>
      <Text style={styles.topic}>Latest Comic</Text>
      <View style={styles.comicContainer}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                source={{ uri: imageUrl }}
                style={styles.image}
              />
            </View>
            <View style={styles.comicInfo}>
              <View style={styles.pill}>
                <Text style={styles.pillText}>#{comicNumber}</Text>
              </View>
              <Text style={styles.pillTitle}>{comicTitle}</Text>
              <Text style={styles.pillSubTitle}>
                {`Date created : ${comicDate}`}
              </Text>
            </View>
          </>
        )}
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
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  headerTitle: {
    fontSize: 25,
  },
  headerSubTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  searchContainer: {
    marginTop: 40,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
    backgroundColor: "#D1E9FE",
    marginHorizontal: 20,
  },
  input: {
    borderRadius: 7,
    backgroundColor: "white",
    paddingLeft: 15,
    marginBottom: 20,
  },
  topic: {
    paddingLeft: 30,
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 20,
  },
  comicContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#eee",
    padding: 20,
    flexDirection: "row",
  },
  imageContainer: {
    borderRadius: 5,
    height: 85,
    width: 85,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
  },
  image: {
    borderRadius: 5,
    height: 80,
    width: 80,
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
});

export default Home;
