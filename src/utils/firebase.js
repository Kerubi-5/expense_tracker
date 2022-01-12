// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWr5t1Qa_9y45PXDwUzablaUc0_QsfFxk",
  authDomain: "expense-tracker-d5897.firebaseapp.com",
  projectId: "expense-tracker-d5897",
  storageBucket: "expense-tracker-d5897.appspot.com",
  messagingSenderId: "145569500361",
  appId: "1:145569500361:web:b1e5f2bb4f41be2e289118",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const google_provider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const expensesRef = collection(db, "expenses");
export const walletRef = collection(db, "wallets");
