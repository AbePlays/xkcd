import { firebase } from "./firebase";

const signup = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => console.log(user.user))
    .catch((e) => console.log(e));
};

const login = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => console.log(user.user))
    .catch((e) => console.log(e));
};

module.exports = {
  signup,
  login,
};
