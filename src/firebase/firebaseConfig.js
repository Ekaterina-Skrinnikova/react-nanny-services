// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKFIhljgBwm2pm7M71DlpbrewWKP1qX10",
  authDomain: "react-nanny-services.firebaseapp.com",
  databaseURL:
    "https://react-nanny-services-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-nanny-services",
  storageBucket: "react-nanny-services.firebasestorage.app",
  messagingSenderId: "876283851141",
  appId: "1:876283851141:web:7a3c0765a30bfe14db14ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
