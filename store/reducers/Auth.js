import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  isLoggedIn: false,
};

const auth = (state = initialState, action) => {
  console.log("[Auth]");
  switch (action.type) {
    case actionTypes.LOG_IN:
      return { ...state, isLoggedIn: true };
    case actionTypes.LOG_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default auth;
