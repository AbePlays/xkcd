import React, { useEffect, useState } from "react";
import Navigator from "./navigator/Navigator";
import AuthNavigator from "./navigator/AuthNavigator";
import { firebase } from "./firebase/firebase";

export default function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("User Present");
        setLoggedIn(true);
      } else {
        console.log("User not present");
      }
    });
  }, []);

  const [loggedIn, setLoggedIn] = useState(false);

  return <>{loggedIn ? <Navigator /> : <AuthNavigator />}</>;
}
