import React from "react";
import FavoriteContextProvider from "./context/FavoriteContext";
import MainNavigator from "./navigator/MainNavigator";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/index";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <FavoriteContextProvider>
        <MainNavigator />
      </FavoriteContextProvider>
    </Provider>
  );
}
