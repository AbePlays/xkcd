import React from "react";
import AuthContextProvider from "./context/AuthContext";
import UserContextProvider from "./context/UserContext";
import FavoriteContextProvider from "./context/FavoriteContext";
import MainNavigator from "./navigator/MainNavigator";

export default function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <FavoriteContextProvider>
          <MainNavigator />
        </FavoriteContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
}
