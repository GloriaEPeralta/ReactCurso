// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCATN7oGFNh0PE8kliD-76bcLp9UJOR6_E",
  authDomain: "react-cursos-f4fbe.firebaseapp.com",
  projectId: "react-cursos-f4fbe",
  storageBucket: "react-cursos-f4fbe.firebasestorage.app",
  messagingSenderId: "546085535338",
  appId: "1:546085535338:web:db977bd74ae81498065413"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FireBaseDB = getFirestore(FirebaseApp);    // Firestore Lite