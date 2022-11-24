// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuFag-f7mwqwRLdAVrv3UZ8lGbCugzkVg",
  authDomain: "doctor-client-d169b.firebaseapp.com",
  projectId: "doctor-client-d169b",
  storageBucket: "doctor-client-d169b.appspot.com",
  messagingSenderId: "842523015841",
  appId: "1:842523015841:web:35d169582a5387e5b0cee0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app