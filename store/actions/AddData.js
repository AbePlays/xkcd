import * as actionType from "./ActionTypes";
import { addData } from "../../firebase/functions";

const AddDataAction = (data) => {
  const { num, img, title, month, year } = data;
  const obj = {
    num,
    img,
    title,
    month,
    year,
  };
  return {
    type: actionType.ADD_DATA,
    payload: obj,
  };
};

const AddData = (data) => {
  return (dispatch) => {
    addData(data);
    dispatch(AddDataAction(data));
  };
};

export default AddData;
