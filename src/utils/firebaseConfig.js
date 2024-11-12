// lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCyyRztCmDuib7FbpfYhsk7KJsIlpySJck",
    authDomain: "timelinebel.firebaseapp.com",
    projectId: "timelinebel",
    storageBucket: "timelinebel.appspot.com",
    messagingSenderId: "998005125683",
    appId: "1:998005125683:web:6b73f4f265724f48b86946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage };
