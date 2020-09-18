import React from "react";
import AuthContextProvider from "./context/AuthContext";
import MainNavigator from "./navigator/MainNavigator";

export default function App() {
  return (
    <AuthContextProvider>
      <MainNavigator />
    </AuthContextProvider>
  );
}
