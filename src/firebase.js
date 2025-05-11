// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyArI0Zszgj2jDSiquK9w2_zClupYdNkhbE",
  authDomain: "studywithlime0118.firebaseapp.com",
  projectId: "studywithlime0118",
  storageBucket: "studywithlime0118.firebasestorage.app",
  messagingSenderId: "833366812595",
  appId: "1:833366812595:web:53eb1edec2cf51ea800dc6",
  measurementId: "G-ZLB4PW3D59"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();