import React, { useEffect, useContext, useState } from "react";
import { firebase } from "../firebase/firebase";
import { getUserData } from "../firebase/functions";
import Navigator from "./Navigator";
import AuthNavigator from "./AuthNavigator";
// import { UserContext } from "../context/UserContext";
import { FavoriteContext } from "../context/FavoriteContext";
import { ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";
import LogIn from "../store/actions/LogIn";
import LogOut from "../store/actions/LogOut";

const MainNavigator = (props) => {
  const [loading, setLoading] = useState(true);
  // const { changeUser, emptyUser } = useContext(UserContext);
  const { initializeFavs, emptyFavs } = useContext(FavoriteContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        let userData = await getUserData(user.uid);
        // changeUser(userData);
        initializeFavs();
        props.logIn(userData);
      } else {
        props.logOut();
        // emptyUser();
        emptyFavs();
      }
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#D1E9FE" />
        </View>
      ) : props.loggedIn ? (
        <Navigator />
      ) : (
        <AuthNavigator />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (userData) => {
      dispatch(LogIn(userData));
    },
    logOut: () => {
      dispatch(LogOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
