import AuthReducer from "./AuthReducer";
import FavoritesReducer from "./FavoritesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: AuthReducer,
  favs: FavoritesReducer,
});

export default rootReducer;
