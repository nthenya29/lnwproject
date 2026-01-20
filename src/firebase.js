// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6vz0B6nH_gVp9wzecBFWlStxzdoft72I",
  authDomain: "lnwproject-132c0.firebaseapp.com",
  projectId: "lnwproject-132c0",
  storageBucket: "lnwproject-132c0.firebasestorage.app",
  messagingSenderId: "920878656770",
  appId: "1:920878656770:web:ee7d6e0ba3b813aaa3661b",
  measurementId: "G-KN2HEKDP9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);