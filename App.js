import React from "react";
import AuthContextProvider from "./context/AuthContext";
import UserContextProvider from "./context/UserContext";
import MainNavigator from "./navigator/MainNavigator";

export default function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <MainNavigator />
      </UserContextProvider>
    </AuthContextProvider>
  );
}
