import React from "react";
import FavoriteContextProvider from "./context/FavoriteContext";
import MainNavigator from "./navigator/MainNavigator";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/index";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <FavoriteContextProvider>
        <MainNavigator />
      </FavoriteContextProvider>
    </Provider>
  );
}
