import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FavoriteContext } from "../context/FavoriteContext";
import ImageViewer from "react-native-image-zoom-viewer";

function Favorite() {
  const [favs, setFavs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const { getFavs, removeFromFirestore } = useContext(FavoriteContext);

  useEffect(() => {
    setFavs(getFavs());
  });

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.comicContainer}
        onPress={() => {
          setImageUrl(item.img);
          setShowModal((prev) => !prev);
        }}
      >
        {showModal ? (
          <Modal
            visible={true}
            transparent={true}
            onRequestClose={() => {
              setShowModal((prev) => !prev);
              setImageUrl();
            }}
          >
            <ImageViewer
              renderIndicator={() => {}}
              imageUrls={[{ url: imageUrl }]}
            />
          </Modal>
        ) : (
          <>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                source={{ uri: item.img }}
                style={styles.image}
              />
            </View>
            <View style={styles.comicInfo}>
              <Text style={styles.pillTitle}>{item.title}</Text>
              <Text style={styles.pillSubTitle}>
                Date created : {`${item.month}/${item.year.substring(2)}`}
              </Text>
              <View style={styles.pill}>
                <Text style={styles.pillText}>#{item.num}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.trashContainer}
              onPress={() => {
                removeFromFirestore(item.num);
              }}
            >
              <Image
                source={require("../assets/trash.png")}
                style={styles.trash}
              />
            </TouchableOpacity>
          </>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favorites</Text>
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
    borderRadius: 5,
    width: "85%",
    alignSelf: "flex-end",
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
    transform: [{ translateX: -40 }],
  },
  image: {
    borderRadius: 5,
    height: 65,
    width: 65,
  },
  comicInfo: {
    justifyContent: "center",
  },
  pill: {
    backgroundColor: "#D1E9FE",
    width: 60,
    height: 25,
    marginTop: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pillText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  pillTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  pillSubTitle: {
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.3,
  },
  trashContainer: {
    position: "absolute",
    right: 15,
    bottom: 10,
  },
  trash: {
    height: 20,
    width: 20,
  },
});

export default Favorite;
