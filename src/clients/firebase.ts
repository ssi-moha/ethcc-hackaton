import { initializeApp } from "firebase/app";
import {
  addDoc,
  getFirestore,
  collection,
  query,
  where,
  doc,
  getDoc,
  updateDoc,
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

export const updateAppFromDB = async (app: AdminFormValues, appId: string) => {
  await updateDoc(doc(db, "app", appId), app);
};

export const enableSismoBadge = async (app: AdminFormValues, appId: string) => {
  await updateDoc(doc(db, "app", appId), {
    ...app,
    sismo: app.sismo ? false : true,
  });
};

export const getAppData = async (appId: string) => {
  const app = doc(db, "app", appId);

  const productSnap = await getDoc(app);

  const data = productSnap.data();

  return data;
};
