// Firebase SDK importeren
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Firebase configuratie
const firebaseConfig = {
    apiKey: "AIzaSyDnBGfFwPCypELVQuz5pXF9K77UfL8oyKQ",
    authDomain: "paprika-verhalen-13202.firebaseapp.com",
    projectId: "paprika-verhalen-13202",
    storageBucket: "paprika-verhalen-13202.firebasestorage.app",
    messagingSenderId: "1046216494559",
    appId: "1:1046216494559:web:c13e5edd1da11292dd886a"
};

// Firebase initialiseren
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporteren zodat andere bestanden Firebase kunnen gebruiken
export { db };
