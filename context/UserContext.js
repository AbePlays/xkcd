import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({});

  const changeUser = (val) => {
    setUser(val);
  };

  const emptyUser = () => {
    setUser({});
  };

  return (
    <UserContext.Provider value={{ user, changeUser, emptyUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
