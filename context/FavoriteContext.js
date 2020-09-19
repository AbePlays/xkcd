import React, { createContext, useState } from "react";
import { addData, getFavsData, removeData } from "../firebase/functions";

export const FavoriteContext = createContext();

function FavoriteContextProvider(props) {
  const [favs, setFavs] = useState([]);

  const addToFirestore = (data) => {
    const { num, img, title, month, year } = data;
    const obj = {
      num,
      img,
      title,
      month,
      year,
    };
    console.log(obj);
    setFavs((prevFavs) => [...prevFavs, obj]);
    addData(data);
  };

  const removeFromFirestore = async (num) => {
    setFavs((prevFavs) => prevFavs.filter((fav) => fav.num !== num));
    await removeData(num);
  };

  const getFavs = () => {
    return favs;
  };

  const initializeFavs = async () => {
    let arr = await getFavsData();
    setFavs(arr);
  };

  const emptyFavs = () => {
    setFavs([]);
  };

  return (
    <FavoriteContext.Provider
      value={{
        addToFirestore,
        getFavs,
        initializeFavs,
        removeFromFirestore,
        emptyFavs,
      }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
