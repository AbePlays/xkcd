import * as actionTypes from "./ActionTypes";
import { getFavsData } from "../../firebase/functions";

const InitFavsAction = (data) => {
  console.log("[InitFavs]");
  return {
    type: actionTypes.INIT_FAVS,
    payload: data,
  };
};

const InitFavs = () => {
  console.log("[InitFavsCreater]");
  return async (dispatch) => {
    try {
      const arr = await getFavsData();
      dispatch(InitFavsAction(arr));
    } catch (e) {
      console.log(e);
    }
  };
};

export default InitFavs;
