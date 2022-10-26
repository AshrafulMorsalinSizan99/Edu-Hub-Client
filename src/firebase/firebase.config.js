// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2SH8HUw2ftdTYnCs5f5_0G6ZM66-uOv0",
    authDomain: process.env.REACT_APP_authDomain,
    // projectId: "edu-hub-website",
    projectId: process.env.REACT_APP_projectId,
    // storageBucket: "edu-hub-website.appspot.com",
    storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: "336214503823",
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: "1:336214503823:web:ba690bb09607cf8166dbfa"
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;