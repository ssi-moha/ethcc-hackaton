// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "ethcc-72c6f.firebaseapp.com",
  databaseURL: "https://ethcc-72c6f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ethcc-72c6f",
  storageBucket: "ethcc-72c6f.appspot.com",
  messagingSenderId: "632681512221",
  appId: "1:632681512221:web:77b8dbf37ba95acd5c35f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);