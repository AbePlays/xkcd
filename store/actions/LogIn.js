import * as actionType from "./ActionTypes";

const LogIn = (userData) => {
  console.log("[LogIn]");
  return {
    type: actionType.LOG_IN,
    payload: userData,
  };
};

export default LogIn;
