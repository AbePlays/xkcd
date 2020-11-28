import React from "react";
import FavoriteContextProvider from "./context/FavoriteContext";
import MainNavigator from "./navigator/MainNavigator";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers/Auth";

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <FavoriteContextProvider>
        <MainNavigator />
      </FavoriteContextProvider>
    </Provider>
  );
}
