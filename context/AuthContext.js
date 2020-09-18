import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const logIn = () => {
    setLoggedIn(true);
  };

  const logOut = () => {
    setLoggedIn(false);
  };

  const addUser = (val) => {
    setUser(val);
  };

  const removeUser = () => {
    setUser({});
  };

  const getUser = () => {
    return user;
  };

  return (
    <AuthContext.Provider
      value={{ loggedIn, logIn, logOut, addUser, removeUser, getUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
