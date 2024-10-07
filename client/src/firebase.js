// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rentola-41ab4.firebaseapp.com",
  projectId: "rentola-41ab4",
  storageBucket: "rentola-41ab4.appspot.com",
  messagingSenderId: "119648323506",
  appId: "1:119648323506:web:620142bcd918427ab6c6ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);