import React, { useState, useContext } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { login } from "../firebase/functions";
import { AuthContext } from "../context/AuthContext";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logIn } = useContext(AuthContext);

  const handleSubmit = () => {
    login(email, password);
    logIn();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topTitle}>Welcome Back,</Text>
        <Text style={styles.topSubtitle}>Log in to continue</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/login.png")} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          onChangeText={(val) => setEmail(val)}
        />
        <TextInput
          value={password}
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(val) => setPassword(val)}
        />
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.bottomText}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "white",
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  topTitle: { fontSize: 25, fontWeight: "bold" },
  topSubtitle: { fontSize: 18, opacity: 0.5 },
  imageContainer: {
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 350,
  },
  inputContainer: {
    paddingHorizontal: 30,
  },
  input: {
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    borderRadius: 5,
    paddingLeft: 20,
    borderColor: "#aaa",
  },
  btn: {
    marginTop: 20,
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
  bottomContainer: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  bottomText: {
    fontWeight: "bold",
    color: "#FB5B5B",
  },
});

export default Login;
