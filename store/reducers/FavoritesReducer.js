import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  favorites: [],
};

const compare = (a, b) => {
  const numA = a.num;
  const numB = b.num;
  if (numB < numA) {
    return 1;
  } else if (numB > numA) {
    return -1;
  } else {
    return 0;
  }
};

const Favorites = (state = initialState, action) => {
  console.log("[FavReducer]");
  switch (action.type) {
    case actionTypes.INIT_FAVS:
      return { favorites: action.payload.sort(compare) };
    case actionTypes.EMPTY_FAVS:
      return { favorites: [] };
    case actionTypes.REMOVE_DATA:
      return {
        favorites: state.favorites.filter((fav) => fav.num !== action.payload),
      };
    case actionTypes.ADD_DATA:
      const newArray = [...state.favorites, action.payload];
      newArray.sort(compare);
      return {
        favorites: newArray,
      };
    default:
      return state;
  }
};

export default Favorites;
