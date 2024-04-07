import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd3T40VLPXO4I1BsZHPqcL3YG1LAmq71k",
  authDomain: "react-notes-1d4d3.firebaseapp.com",
  projectId: "react-notes-1d4d3",
  storageBucket: "react-notes-1d4d3.appspot.com",
  messagingSenderId: "546912376505",
  appId: "1:546912376505:web:b5afdd91c675e2c0eded68"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")