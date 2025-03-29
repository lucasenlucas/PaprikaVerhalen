import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

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

// Verhalen ophalen uit Firestore
async function laadVerhalen() {
    const verhalenContainer = document.getElementById("verhalen-container");
    const querySnapshot = await getDocs(collection(db, "verhalen"));

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const verhaalCard = document.createElement("div");
        verhaalCard.classList.add("verhaal-card");
        verhaalCard.innerHTML = `
            <h2>${data.titel}</h2>
            <p>${data.korteSamenvatting}</p>
        `;
        verhaalCard.addEventListener("click", () => {
            window.location.href = `verhaal.html?id=${doc.id}`;
        });
        verhalenContainer.appendChild(verhaalCard);
    });
}

// Functie aanroepen
laadVerhalen();
