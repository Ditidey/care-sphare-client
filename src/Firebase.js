// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaf4MDbsnQCKuRUAoI-BtnsWdnDECyD6o",
  authDomain: "care-sphare.firebaseapp.com",
  projectId: "care-sphare",
  storageBucket: "care-sphare.appspot.com",
  messagingSenderId: "80983781360",
  appId: "1:80983781360:web:5d0bce98f8908d5a2ab735",

  // apiKey: import.meta.VITE_apiKey,
  // authDomain: import.meta.VITE_authDomain,
  // projectId: import.meta.VITE_projectId,
  // storageBucket: import.meta.VITE_storageBucket,
  // messagingSenderId: import.meta.VITE_messagingSenderId,
  // appId: import.meta.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);