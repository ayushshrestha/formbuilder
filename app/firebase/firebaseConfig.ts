import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCSzqqOP-sbQTxu-ce97hzqibwtWHVkQIE",
    authDomain: "formbuilder-c9e3e.firebaseapp.com",
    projectId: "formbuilder-c9e3e",
    storageBucket: "formbuilder-c9e3e.appspot.com",
    messagingSenderId: "128939582439",
    appId: "1:128939582439:web:576032dc3c95e5b3121342",
    measurementId: "G-TF2F40BMNL"
}; //this is where your firebase app values you copied will go

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();