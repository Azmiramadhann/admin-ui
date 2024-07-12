import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-f0fc6.firebaseapp.com",
  projectId: "store-tutorial-f0fc6",
  storageBucket: "store-tutorial-f0fc6.appspot.com",
  messagingSenderId: "1007675775021",
  appId: "1:1007675775021:web:bbd389778bfb31dccf40a4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const  db = getFirestore(app);
export const storage = getStorage(app);