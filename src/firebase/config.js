// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCqZgay3cpeu5UkWJOFEvTDB_hZnbieVY",
  authDomain: "cegaphotos-d17ce.firebaseapp.com",
  projectId: "cegaphotos-d17ce",
  storageBucket: "cegaphotos-d17ce.appspot.com",
  messagingSenderId: "978831201415",
  appId: "1:978831201415:web:77faa886a13fa03837d422",
  measurementId: "G-9HNHFM7GRM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();