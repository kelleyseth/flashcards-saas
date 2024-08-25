// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA37gyw8EACmGI0dNJoMJEZlElYtN-XwYU",
  authDomain: "flashcards-5e00e.firebaseapp.com",
  projectId: "flashcards-5e00e",
  storageBucket: "flashcards-5e00e.appspot.com",
  messagingSenderId: "192313245719",
  appId: "1:192313245719:web:30698f21c3622085ce1c52",
  measurementId: "G-TYR6VFTQ4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}