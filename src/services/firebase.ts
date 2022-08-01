import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig  = {
    apiKey: "AIzaSyD7yazwwoNWL9C4348UV7kM4jXAmu5u3UE",
    authDomain: "auth-df549.firebaseapp.com",
    projectId: "auth-df549",
    storageBucket: "auth-df549.appspot.com",
    messagingSenderId: "216451402336",
    appId: "1:216451402336:web:fa81f81d5e0bae29e5d105",
    measurementId: "G-T1SRZ1HVL7"
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();