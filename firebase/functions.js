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

const addData = async (data) => {
  try {
    let { uid } = await currentUser();
    let user = await firebase.firestore().collection("users").doc(uid);
    let doc = await user.get();
    await user.update({
      favorites: [...doc.data().favorites, data],
    });
  } catch (e) {
    console.log(e);
  }
};

const getFavsData = async () => {
  try {
    let { uid } = await currentUser();
    let docs = await firebase.firestore().collection("users").doc(uid).get();
    let arr = [];
    docs.data().favorites.forEach((fav) => {
      let obj = {
        num: fav.num,
        img: fav.img,
        title: fav.title,
        month: fav.month,
        year: fav.year,
      };
      arr.push(obj);
    });

    return arr;
  } catch (e) {
    console.log(e);
  }
};

const removeData = async (num) => {
  try {
    let { uid } = await currentUser();
    let user = await firebase.firestore().collection("users").doc(uid);
    let doc = await user.get();
    let arr = doc.data().favorites;
    arr = arr.filter((item) => item.num !== num);
    await user.update({
      favorites: arr,
    });
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
  addData,
  getFavsData,
  removeData,
};
