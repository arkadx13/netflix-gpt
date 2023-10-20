// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtCLxAjSorh3VTzaQatoIj4rR-3VmznFI",
  authDomain: "netflixgpt-f0d5e.firebaseapp.com",
  projectId: "netflixgpt-f0d5e",
  storageBucket: "netflixgpt-f0d5e.appspot.com",
  messagingSenderId: "853562304746",
  appId: "1:853562304746:web:369f7ef43d9aa6c8ed4f93",
  measurementId: "G-075EWSY9M8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Authentication
export const auth = getAuth();
