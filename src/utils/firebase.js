// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtdmoP3BtcxaeKKkllrRUjGeX1mkOULSo",
  authDomain: "netflix-gpt-1dbc2.firebaseapp.com",
  projectId: "netflix-gpt-1dbc2",
  storageBucket: "netflix-gpt-1dbc2.appspot.com",
  messagingSenderId: "669876202771",
  appId: "1:669876202771:web:7d4f9d3143e22e59a9fee6",
  measurementId: "G-CK74YBD5P0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
