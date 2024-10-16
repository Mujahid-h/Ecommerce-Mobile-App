import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNAtIVsG7GkNQ4R6gnXm6B4o5ZfOWXZQ8",
  authDomain: "myecommercemobile.firebaseapp.com",
  databaseURL: "https://myecommercemobile-default-rtdb.firebaseio.com",
  projectId: "myecommercemobile",
  storageBucket: "myecommercemobile.appspot.com",
  messagingSenderId: "240698971186",
  appId: "1:240698971186:web:f35779391c42efe780582b",
  measurementId: "G-HRQV6SH06T",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
