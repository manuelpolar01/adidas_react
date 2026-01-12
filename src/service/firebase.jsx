// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzx9okIJqekBzIaX2FdGR_e_ZZYuiy7xc",
  authDomain: "adidas-b7b9a.firebaseapp.com",
  projectId: "adidas-b7b9a",
  storageBucket: "adidas-b7b9a.firebasestorage.app",
  messagingSenderId: "175308966666",
  appId: "1:175308966666:web:dfe0c8c3d9ab21b61b88f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app)