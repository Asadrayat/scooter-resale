// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAAdlTD1RST7zBwAH3-GiItlXDVUDA-1k",
  authDomain: "recycle-bin-8bc7a.firebaseapp.com",
  projectId: "recycle-bin-8bc7a",
  storageBucket: "recycle-bin-8bc7a.appspot.com",
  messagingSenderId: "105026501187",
  appId: "1:105026501187:web:4aff81e47003c0c78a32f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;