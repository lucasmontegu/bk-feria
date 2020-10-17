import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_APIKEY,
  authDomain: process.env.REACT_APP_FIRE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIRE_DB_URL,
  projectId: process.env.REACT_APP_FIRE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIRE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIRE_MESSAGE_SENDER,
  appId: process.env.REACT_APP_FIRE_APPID,
  measurementId: process.env.REACT_APP_FIRE_MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();
firebase.firestore();
firebase.storage();

export { firebase, firebaseConfig };
