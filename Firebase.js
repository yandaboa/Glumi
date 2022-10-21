import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWk2EKd0342I82gVHHpDNQYCzdGTjo5Ew",
    authDomain: "breathanalyzer-db8fb.firebaseapp.com",
    databaseURL: "https://breathanalyzer-db8fb-default-rtdb.firebaseio.com",
    projectId: "breathanalyzer-db8fb",
    storageBucket: "breathanalyzer-db8fb.appspot.com",
    messagingSenderId: "444177996622",
    appId: "1:444177996622:web:3e2ea687b31085fb2adc1f",
    measurementId: "G-YNESQV4MPD"
};

let app = initializeApp(firebaseConfig)

const authen = getAuth(app);

// const database = getFirestore(app);

export { authen }