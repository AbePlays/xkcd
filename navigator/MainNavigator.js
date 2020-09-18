import React, { useEffect, useContext } from "react";
import { firebase } from "../firebase/firebase";
import Navigator from "./Navigator";
import AuthNavigator from "./AuthNavigator";
import { AuthContext } from "../context/AuthContext";

function MainNavigator() {
  const { loggedIn, logIn, logOut } = useContext(AuthContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("User Present");
        logIn();
      } else {
        console.log("User not present");
        logOut();
      }
    });
  }, []);

  return <>{loggedIn ? <Navigator /> : <AuthNavigator />}</>;
}

export default MainNavigator;
