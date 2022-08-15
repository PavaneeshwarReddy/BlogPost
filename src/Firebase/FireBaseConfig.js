// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIX8ucfVeFkRJfzY4tPP_49V-oRGNZ-tc",
  authDomain: "blogpost-c59e1.firebaseapp.com",
  projectId: "blogpost-c59e1",
  storageBucket: "blogpost-c59e1.appspot.com",
  messagingSenderId: "995006258524",
  appId: "1:995006258524:web:e2dddf56bbb62e7cb4f599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =  getAuth(app);
export const provider= new GoogleAuthProvider();
export const db = getFirestore(app);