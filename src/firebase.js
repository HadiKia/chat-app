import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyApqHZXv2b8tQUcSQxqSLz9-EJSwaG5rGM",
    authDomain: "chatgram-a0cf3.firebaseapp.com",
    projectId: "chatgram-a0cf3",
    storageBucket: "chatgram-a0cf3.appspot.com",
    messagingSenderId: "74470018738",
    appId: "1:74470018738:web:eaf11ee7e0e9882eefc3ab"
  }).auth();