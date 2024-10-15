// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8LFGQRS7SUlZWn3cr28ibeUUkHIfAQ6c",
  authDomain: "ai-planner-de0e7.firebaseapp.com",
  projectId: "ai-planner-de0e7",
  storageBucket: "ai-planner-de0e7.appspot.com",
  messagingSenderId: "829469855584",
  appId: "1:829469855584:web:58ecf671d3baa036951805",
  measurementId: "G-Q5JSX2ZCF7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);