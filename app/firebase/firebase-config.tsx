// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSzqqOP-sbQTxu-ce97hzqibwtWHVkQIE",
  authDomain: "formbuilder-c9e3e.firebaseapp.com",
  projectId: "formbuilder-c9e3e",
  storageBucket: "formbuilder-c9e3e.appspot.com",
  messagingSenderId: "128939582439",
  appId: "1:128939582439:web:576032dc3c95e5b3121342",
  measurementId: "G-TF2F40BMNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();