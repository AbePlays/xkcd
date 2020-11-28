import * as actionType from "./ActionTypes";

const LogIn = () => {
  console.log("[LogOut]");
  return {
    type: actionType.LOG_OUT,
  };
};

export default LogIn;
