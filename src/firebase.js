// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA--qwna56DeDGfBZ0LYT8hw0aRZozhMyQ',
  authDomain: 'where-s-waldo-52507.firebaseapp.com',
  projectId: 'where-s-waldo-52507',
  storageBucket: 'where-s-waldo-52507.appspot.com',
  messagingSenderId: '1074185658851',
  appId: '1:1074185658851:web:732faef2140d20a558c0d6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
