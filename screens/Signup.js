import React, { useState, useContext } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { signup } from "../firebase/functions";
import { AuthContext } from "../context/AuthContext";

function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { logIn } = useContext(AuthContext);

  const handleSubmit = async () => {
    if (password === confirmPassword) {
      setLoading(true);
      await signup(email, password, name);
      logIn();
    } else {
      Alert.alert("Password not same");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.topTitle}>Create your Account</Text>
        <Text style={styles.topSubtitle}>Sign up and get started</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/signup.png")} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={name}
          placeholder="Name"
          style={styles.input}
          keyboardType="name-phone-pad"
          onChangeText={(val) => setName(val)}
        />
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
        <TextInput
          value={confirmPassword}
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(val) => setConfirmPassword(val)}
        />
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.btnText}>Sign up</Text>
          )}
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.bottomText}> Log in</Text>
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

export default Signup;
