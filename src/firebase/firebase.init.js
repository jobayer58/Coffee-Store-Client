// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbOih69WI2VdnQQXF3Xw8F12_bRDknITQ",
  authDomain: "coffee-store-5d64c.firebaseapp.com",
  projectId: "coffee-store-5d64c",
  storageBucket: "coffee-store-5d64c.firebasestorage.app",
  messagingSenderId: "526705869842",
  appId: "1:526705869842:web:1fa2aabade93c0e326c4cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);