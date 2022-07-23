import { initializeApp } from "firebase/app";
import {
  addDoc,
  getFirestore,
  collection,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { AdminFormValues } from "../components/AdminForm";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ethcc-72c6f.firebaseapp.com",
  projectId: "ethcc-72c6f",
  storageBucket: "ethcc-72c6f.appspot.com",
  messagingSenderId: "632681512221",
  appId: "1:632681512221:web:77b8dbf37ba95acd5c35f4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const apps = collection(db, "app");

export const addAppToDB = async (app: AdminFormValues) => {
  await addDoc(collection(db, "app"), app);
};

export const getAppProducts = async (appId: string) => {
  const app = doc(db, "app", appId);

  const productSnap = await getDoc(app);

  return productSnap.data()?.products;
};
