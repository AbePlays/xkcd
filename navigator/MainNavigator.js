import React, { useEffect, useContext } from "react";
import { firebase } from "../firebase/firebase";
import { getUserData } from "../firebase/functions";
import Navigator from "./Navigator";
import AuthNavigator from "./AuthNavigator";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";
import { FavoriteContext } from "../context/FavoriteContext";

function MainNavigator() {
  const { loggedIn, logIn, logOut } = useContext(AuthContext);
  const { changeUser, emptyUser } = useContext(UserContext);
  const { initializeFavs } = useContext(FavoriteContext);

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
      }
    });
  }, []);

  return <>{loggedIn ? <Navigator /> : <AuthNavigator />}</>;
}

export default MainNavigator;
