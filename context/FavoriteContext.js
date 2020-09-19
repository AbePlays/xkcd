import React, { createContext, useState } from "react";
import { addData } from "../firebase/functions";

export const FavoriteContext = createContext();

function FavoriteContextProvider(props) {
  const addToFirestore = (data) => {
    addData(data);
  };

  return (
    <FavoriteContext.Provider value={{ addToFirestore }}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
