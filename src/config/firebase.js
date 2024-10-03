// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWFtkYX4EGqpiaHMiLpLelm-GJL_2ZZAQ",
  authDomain: "movies-management-c0610.firebaseapp.com",
  projectId: "movies-management-c0610",
  storageBucket: "movies-management-c0610.appspot.com",
  messagingSenderId: "562929373229",
  appId: "1:562929373229:web:646d81af57cd563d67e8a4",
  measurementId: "G-K5R82X62SG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
