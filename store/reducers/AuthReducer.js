import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const auth = (state = initialState, action) => {
  console.log("[Auth]");
  switch (action.type) {
    case actionTypes.LOG_IN:
      return { isLoggedIn: true, user: action.payload };
    case actionTypes.LOG_OUT:
      return { isLoggedIn: false, user: null };
    default:
      return state;
  }
};

export default auth;
