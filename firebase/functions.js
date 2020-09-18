import { firebase } from "./firebase";

const signup = async (email, password, name) => {
  try {
    let res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    let user = res.user;
    await createUser(user, name);
  } catch (e) {
    console.log(e);
  }
};

const login = async (email, password) => {
  try {
    let res = await firebase.auth().signInWithEmailAndPassword(email, password);
    let user = res.user;
    console.log(user);
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
      favorites: [],
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  signup,
  login,
  signout,
};
