import { firebase } from "./firebase";

const signup = async (email, password, name) => {
  try {
    let res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    let user = res.user;
    await createUser(user, name);
    return user;
  } catch (e) {
    console.log(e);
  }
};

const login = async (email, password) => {
  try {
    let res = await firebase.auth().signInWithEmailAndPassword(email, password);
    let user = res.user;
    return user;
  } catch (e) {
    console.log(e);
  }
};

const signout = async () => {
  try {
    await firebase.auth().signOut();
  } catch (e) {
    console.log(e);
  }
};

const createUser = async (user, name) => {
  try {
    await firebase.firestore().collection("users").doc(user.uid).set({
      name: name,
      email: user.email,
      favorites: [],
    });
  } catch (e) {
    console.log(e);
  }
};

const currentUser = async () => {
  try {
    let user = await firebase.auth().currentUser;
    return user;
  } catch (e) {
    console.log(e);
  }
};

const getUserData = async (uid) => {
  console.log("Inside getUserData");
  try {
    let docs = await firebase.firestore().collection("users").doc(uid).get();
    return docs.data();
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  signup,
  login,
  signout,
  getUserData,
  currentUser,
};
