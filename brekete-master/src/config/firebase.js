// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf4lIguJsxlw9OUixj2PNWPbRd8z7OLxk",
  authDomain: "breketemaster-dffb9.firebaseapp.com",
  projectId: "breketemaster-dffb9",
  storageBucket: "breketemaster-dffb9.appspot.com",
  messagingSenderId: "247309996534",
  appId: "1:247309996534:web:079b55a3ce712a4e85b7d7",
  measurementId: "G-8HTDS4XEP3"
};


  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const storage = getStorage(app)
// Initialize Firebase




