import React, { useEffect, useContext, useState } from "react";
import { firebase } from "../firebase/firebase";
import { getUserData } from "../firebase/functions";
import Navigator from "./Navigator";
import AuthNavigator from "./AuthNavigator";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";
import { FavoriteContext } from "../context/FavoriteContext";
import { ActivityIndicator, View } from "react-native";

function MainNavigator() {
  const [loading, setLoading] = useState(true);
  const { loggedIn, logIn, logOut } = useContext(AuthContext);
  const { changeUser, emptyUser } = useContext(UserContext);
  const { initializeFavs, emptyFavs } = useContext(FavoriteContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        let userData = await getUserData(user.uid);
        changeUser(userData);
        await initializeFavs();
        logIn();
      } else {
        logOut();
        emptyUser();
        emptyFavs();
      }
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : loggedIn ? (
        <Navigator />
      ) : (
        <AuthNavigator />
      )}
    </>
  );
}

export default MainNavigator;
