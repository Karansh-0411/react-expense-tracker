// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUHfbRhkh4YbGOWJ-beqgUA-yaOFmeTy4",
  authDomain: "expensetracker-a5482.firebaseapp.com",
  projectId: "expensetracker-a5482",
  storageBucket: "expensetracker-a5482.appspot.com",
  messagingSenderId: "158835139796",
  appId: "1:158835139796:web:c04224882e4ee8dc86c741",
  measurementId: "G-QVDZ620V92"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const Gprovider = new GoogleAuthProvider()
export const db = getFirestore(app)