import firebase  from "firebase";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBLMntYrFGDYwiZDNcf7gKdclPkFUIJQhE",
  authDomain: "twitterclone-d4250.firebaseapp.com",
  projectId: "twitterclone-d4250",
  storageBucket: "twitterclone-d4250.appspot.com",
  messagingSenderId: "338709449233",
  appId: "1:338709449233:web:08a611f370ce52ef897fb0",
  measurementId: "G-NCS5450JDH",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db  = firebase.firestore();
export default db;
