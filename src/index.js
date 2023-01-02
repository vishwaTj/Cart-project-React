import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import * as firebase from 'firebase';
// import "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBAOATwG5G39BC5PZGHbhSYahtQyxtHIOA",
  authDomain: "cart-57f1b.firebaseapp.com",
  projectId: "cart-57f1b",
  storageBucket: "cart-57f1b.appspot.com",
  messagingSenderId: "118106128161",
  appId: "1:118106128161:web:526d6735007e5f191f4860"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app); //create instance of firebase access and export it 

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };


ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

