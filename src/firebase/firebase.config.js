// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2SH8HUw2ftdTYnCs5f5_0G6ZM66-uOv0",
    authDomain: "edu-hub-website.firebaseapp.com",
    projectId: "edu-hub-website",
    storageBucket: "edu-hub-website.appspot.com",
    messagingSenderId: "336214503823",
    appId: "1:336214503823:web:ba690bb09607cf8166dbfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;