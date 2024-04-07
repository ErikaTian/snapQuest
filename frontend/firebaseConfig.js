import { initializeApp, getApps } from "firebase/app"
import { getFirestore, collection, addDoc, doc, getDoc , updateDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDYxvFdS7HTNwhxWf9BoEeMcBMXk28EGqU",
  authDomain: "snapquest-a2392.firebaseapp.com",
  databaseURL: "https://snapquest-a2392-default-rtdb.firebaseio.com",
  projectId: "snapquest-a2392",
  storageBucket: "snapquest-a2392.appspot.com",
  messagingSenderId: "25502989679",
  appId: "1:25502989679:web:3ab67adf05d3dd30b6bc9a",
  measurementId: "G-EL82EQG1H6"
};

// Ensure Firebase is initialized
if (!getApps().length) {
  initializeApp(firebaseConfig);
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const userCollection = collection(db, "users");

export const firestore = getFirestore(app);
export { addDoc };
export { collection };
export { doc };
export {getDoc};
export {updateDoc};
