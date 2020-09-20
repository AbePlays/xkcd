import React, { useEffect, useState, useContext } from "react";
import {
  Modal,
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  YellowBox,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { UserContext } from "../context/UserContext";
import ImageViewer from "react-native-image-zoom-viewer";

YellowBox.ignoreWarnings(["Setting a timer"]);

function Home() {
  const [loading, setLoading] = useState(true);
  const [comicNumber, setComicNumber] = useState();
  const [comicTitle, setComicTitle] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [showModal, setShowModal] = useState(false);

  const { user } = useContext(UserContext);
  const name = user.name.split(" ")[0];

  const fetchData = async () => {
    try {
      let res = await fetch(`http://xkcd.com/info.0.json`);
      let data = await res.json();
      setComicNumber(data.num);
      setComicTitle(data.title);
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
      {showModal ? (
        <Modal
          animationType="slide"
          visible={true}
          transparent={true}
          onRequestClose={() => setShowModal((prev) => !prev)}
        >
          <ImageViewer
            renderIndicator={() => {}}
            imageUrls={[{ url: imageUrl }]}
          />
        </Modal>
      ) : (
        <>
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
          <View style={styles.mainContainer}>
            <TouchableOpacity
              style={styles.bottomContainer}
              onPress={() => setShowModal((prev) => !prev)}
            >
              <Text style={styles.topic}>Latest Comic</Text>
              {loading ? (
                <View style={styles.activityContainer}>
                  <ActivityIndicator size="large" color="#D1E9FE" />
                </View>
              ) : (
                <View>
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
                  </View>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomContainer}>
              <View style={styles.exploreView}>
                <Image
                  source={require("../assets/right-arrow-button.png")}
                  style={styles.exploreImage}
                />
                <Text style={styles.exploreText}>Explore</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  bottomContainer: {
    marginTop: 30,
    flex: 1,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderRadius: 15,
    borderColor: "#eee",
    height: 270,
    elevation: 2,
    marginHorizontal: 5,
  },
  activityContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    marginVertical: 15,
    borderRadius: 5,
    height: 90,
    alignSelf: "center",
  },
  image: {
    borderRadius: 5,
    height: 90,
    width: 150,
  },
  exploreView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  exploreImage: {
    width: 40,
    height: 40,
  },
  exploreText: {
    marginTop: 40,
    fontSize: 20,
  },
  comicInfo: {
    justifyContent: "space-between",
    marginTop: 10,
    paddingLeft: 10,
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
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Home;
