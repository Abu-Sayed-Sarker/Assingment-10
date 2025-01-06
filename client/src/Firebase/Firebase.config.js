// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCevFJKgMQYnf4TTJ8_KtPAPG2vnJ5tSRY",
  // authDomain: "e-visa-8b35c.firebaseapp.com",
  // projectId: "e-visa-8b35c",
  // storageBucket: "e-visa-8b35c.firebasestorage.app",
  // messagingSenderId: "898557422546",
  // appId: "1:898557422546:web:37474c6b8b4b7308fbf60b"

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

