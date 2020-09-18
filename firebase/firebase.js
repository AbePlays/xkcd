import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB6h04SOb40sJ-w_68TlMoEW9i-cATv0f0",
  authDomain: "xkcd-rn.firebaseapp.com",
  databaseURL: "https://xkcd-rn.firebaseio.com",
  projectId: "xkcd-rn",
  storageBucket: "xkcd-rn.appspot.com",
  messagingSenderId: "121974829149",
  appId: "1:121974829149:web:e8bb83fbb608677dcd1db4",
  measurementId: "G-GX2CT6FJ08",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
