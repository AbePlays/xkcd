import * as actionType from "./ActionTypes";
import { removeData } from "../../firebase/functions";

const RemoveDataAction = (num) => {
  return {
    type: actionType.REMOVE_DATA,
    payload: num,
  };
};

const RemoveData = (num) => {
  return (dispatch) => {
    removeData(num);
    dispatch(RemoveDataAction(num));
  };
};

export default RemoveData;
