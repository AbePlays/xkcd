import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { signout } from "../firebase/functions";

const Profile = (props) => {
  const handleSubmit = () => {
    signout();
  };

  const name = props.name.split(" ")[0];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/placeholder.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.greetText}>Hi, {name}</Text>
      <View style={styles.settingContainer}>
        <TouchableOpacity activeOpacity="0.9">
          <View style={styles.changeContainer}>
            <Text style={styles.settingText}>Change Name</Text>
            <Image
              source={require("../assets/next.png")}
              style={styles.nextIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity="0.9">
          <View style={styles.changeContainer}>
            <Text style={styles.settingText}>Change Password</Text>
            <Image
              source={require("../assets/next.png")}
              style={styles.nextIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity="0.9">
          <View style={styles.changeContainer}>
            <Text style={styles.settingText}>App Settings</Text>
            <Image
              source={require("../assets/next.png")}
              style={styles.nextIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity="0.9">
          <View style={styles.changeContainer}>
            <Text style={styles.settingText}>Help and Support</Text>
            <Image
              source={require("../assets/next.png")}
              style={styles.nextIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Sign out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

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
    marginTop: 40,
    alignSelf: "center",
    borderColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    height: 156,
    width: 156,
    borderRadius: 78,
    borderWidth: 10,
  },
  image: {
    borderRadius: 75,
    height: 150,
    width: 150,
  },
  greetText: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  settingContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  changeContainer: {
    borderBottomWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 55,
  },
  settingText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  nextIcon: {
    height: 15,
    opacity: 0.5,
    width: 15,
  },
  btn: {
    marginVertical: 40,
    marginHorizontal: 30,
    backgroundColor: "#FB5B5B",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

const mapStateToProps = (state) => {
  return {
    name: state.auth.user.name,
  };
};

export default connect(mapStateToProps)(Profile);
