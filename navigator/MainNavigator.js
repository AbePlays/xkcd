import React, { useContext } from "react";
import Navigator from "./Navigator";
import AuthNavigator from "./AuthNavigator";
import { AuthContext } from "../context/AuthContext";

function MainNavigator() {
  const { loggedIn } = useContext(AuthContext);

  return <>{loggedIn ? <Navigator /> : <AuthNavigator />}</>;
}

export default MainNavigator;
