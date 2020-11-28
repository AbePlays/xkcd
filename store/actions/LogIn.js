import * as actionType from "./ActionTypes";

const LogIn = () => {
  console.log("[LogIn]");
  return {
    type: actionType.LOG_IN,
  };
};

export default LogIn;
