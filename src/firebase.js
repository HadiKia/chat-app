import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBghjdNtfyLREFTuZCT2Nyyh6w-wuyG6Cg",
    authDomain: "chatgram-688d9.firebaseapp.com",
    projectId: "chatgram-688d9",
    storageBucket: "chatgram-688d9.appspot.com",
    messagingSenderId: "113337423291",
    appId: "1:113337423291:web:97589f721b6fd2de0fe09e",
  })
  .auth();