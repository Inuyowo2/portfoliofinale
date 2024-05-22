import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "@firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr4zDCBBxDqXkxMdtzYeuenZ6k4Ra2sa8",
  authDomain: "portfoliofinal2-a50dc.firebaseapp.com",
  projectId: "portfoliofinal2-a50dc",
  storageBucket: "portfoliofinal2-a50dc.appspot.com",
  messagingSenderId: "420613329476",
  appId: "1:420613329476:web:53e443582ba0da5a35a211"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const firestorage = getStorage(app);
export { firestore, firestorage }; 