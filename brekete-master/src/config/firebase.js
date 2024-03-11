// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkvK3YJ4yBKlrERt836dcwYnSqv0c38a8",
  authDomain: "brekete-4e8df.firebaseapp.com",
  projectId: "brekete-4e8df",
  storageBucket: "brekete-4e8df.appspot.com",
  messagingSenderId: "285664499439",
  appId: "1:285664499439:web:0d6791363921649ae06d1a",
  measurementId: "G-FHTH5B9WQQ"
};


  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth(app)
export const eProvder = new EmailAuthProvider
export const provider = new GoogleAuthProvider()
export const storage = getStorage(app)
export const db = getFirestore(app)
// Initialize Firebase




