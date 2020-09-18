import { firebase } from "./firebase";

const signup = (email, password, name) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res.user);
      createUser(res.user, name);
    })
    .catch((e) => console.log(e));
};

const login = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => console.log(user.user))
    .catch((e) => console.log(e));
};

const signout = () => {
  firebase
    .auth()
    .signOut()
    .catch((e) => console.log(e));
};

const createUser = (user, name) => {
  firebase
    .firestore()
    .collection("users")
    .doc(user.uid)
    .set({
      name: name,
      favorites: [],
    })
    .catch((e) => console.log(e));
};

module.exports = {
  signup,
  login,
  signout,
};
