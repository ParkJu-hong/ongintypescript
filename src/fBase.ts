import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmumjYq1KuzxfLnaLYobBRIvAgpFKu_XM",
  authDomain: "ongin-b3008.firebaseapp.com",
  projectId: "ongin-b3008",
  storageBucket: "ongin-b3008.appspot.com",
  messagingSenderId: "1015481518718",
  appId: "1:1015481518718:web:6522612cf731886eb9662f",
  measurementId: "G-MBXVKS3ZBL"
};

firebase.initializeApp(firebaseConfig);
 
export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();