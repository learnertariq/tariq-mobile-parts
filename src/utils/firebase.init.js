// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFT8_Rd8GIwrRGQDtcQJ6n9lhYbcHimfU",
  authDomain: "tariq-mobile-parts.firebaseapp.com",
  projectId: "tariq-mobile-parts",
  storageBucket: "tariq-mobile-parts.appspot.com",
  messagingSenderId: "1059856044657",
  appId: "1:1059856044657:web:0b4d15435fd0bce6ca41d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
