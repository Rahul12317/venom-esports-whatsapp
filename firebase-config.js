// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  RecaptchaVerifier, 
  signInWithPhoneNumber, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  increment, 
  collection, 
  addDoc 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Venom eSports Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAcaVbTixLkrLbVk7Yg438_91eFbbjyak",
  authDomain: "venom-esports-a3a68.firebaseapp.com",
  projectId: "venom-esports-a3a68",
  storageBucket: "venom-esports-a3a68.firebasestorage.app",
  messagingSenderId: "534908392563",
  appId: "1:534908392563:web:7dbbc324c9eb60beb94606",
  measurementId: "G-E7M691XKQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export all required Firestore & Auth methods
export { 
  RecaptchaVerifier, 
  signInWithPhoneNumber, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  increment, 
  collection, 
  addDoc 
};