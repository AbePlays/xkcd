import React from "react";
import UserContextProvider from "./context/UserContext";
import FavoriteContextProvider from "./context/FavoriteContext";
import MainNavigator from "./navigator/MainNavigator";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers/Auth";

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <FavoriteContextProvider>
          <MainNavigator />
        </FavoriteContextProvider>
      </UserContextProvider>
    </Provider>
  );
}
