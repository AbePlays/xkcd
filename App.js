import React, { useEffect, useState, useContext } from "react";
import { firebase } from "./firebase/firebase";
import AuthContextProvider from "./context/AuthContext";
import MainNavigator from "./navigator/MainNavigator";

export default function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("User Present");
      } else {
        console.log("User not present");
      }
    });
  }, []);

  return (
    <AuthContextProvider>
      <MainNavigator />
    </AuthContextProvider>
  );
}
