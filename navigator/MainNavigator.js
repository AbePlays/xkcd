import React, { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase";
import { getUserData } from "../firebase/functions";
import Navigator from "./Navigator";
import AuthNavigator from "./AuthNavigator";
import { ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";
import LogIn from "../store/actions/LogIn";
import LogOut from "../store/actions/LogOut";
import InitFavs from "../store/actions/InitFavs";
import EmptyFavs from "../store/actions/EmptyFavs";

const MainNavigator = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        let userData = await getUserData(user.uid);
        props.initFavs();
        props.logIn(userData);
      } else {
        props.logOut();
        props.clearFavs();
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
    loggedIn: state.auth.isLoggedIn,
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
    initFavs: () => {
      dispatch(InitFavs());
    },
    clearFavs: () => {
      dispatch(EmptyFavs());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
