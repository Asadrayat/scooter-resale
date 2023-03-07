// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcePdwajQ9XJHX-IYmVdmrSZhE0kUSQ80",
  authDomain: "scooter-resale.firebaseapp.com",
  projectId: "scooter-resale",
  storageBucket: "scooter-resale.appspot.com",
  messagingSenderId: "21642311060",
  appId: "1:21642311060:web:b9b2cd6d05ae845c8c4b81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;