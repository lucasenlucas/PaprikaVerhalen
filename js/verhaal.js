import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

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

// Haal het verhaal-ID op uit de URL
const urlParams = new URLSearchParams(window.location.search);
const verhaalId = urlParams.get("id");

// Laad een specifiek verhaal
async function laadVerhaal() {
    if (!verhaalId) {
        document.body.innerHTML = "<h1>Geen verhaal gevonden</h1>";
        return;
    }

    const verhaalDoc = await getDoc(doc(db, "verhalen", verhaalId));
    if (verhaalDoc.exists()) {
        const data = verhaalDoc.data();
        document.getElementById("verhaal-titel").innerText = data.titel;
        document.getElementById("verhaal-afbeelding").src = data.afbeelding;
        document.getElementById("verhaal-auteur").innerText = data.auteur;
        document.getElementById("verhaal-tekst").innerText = data.tekst;
        
        // Deelknop functionaliteit
        document.getElementById("deel-knop").addEventListener("click", () => {
            navigator.clipboard.writeText(window.location.href);
            alert("Link gekopieerd!");
        });
    } else {
        document.body.innerHTML = "<h1>Verhaal niet gevonden</h1>";
    }
}

// Functie aanroepen
laadVerhaal();
