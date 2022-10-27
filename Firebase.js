import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, update } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCWk2EKd0342I82gVHHpDNQYCzdGTjo5Ew",
    authDomain: "breathanalyzer-db8fb.firebaseapp.com",
    databaseURL: "https://breathanalyzer-db8fb-default-rtdb.firebaseio.com",
    projectId: "breathanalyzer-db8fb",
    storageBucket: "breathanalyzer-db8fb.appspot.com",
    messagingSenderId: "444177996622",
    appId: "1:444177996622:web:3e2ea687b31085fb2adc1f",
    measurementId: "G-YNESQV4MPD",
    databaseURL: "https://breathanalyzer-db8fb-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig)

const authen = getAuth(app);

// const reference = 
const database = getDatabase(app);

function createUserData(userId, name, email){
    set(ref(database, 'users/' + userId), {
        name: name,
        email: email
    })
}

function pairDevice(userID){
    set(ref(database, 'currPairingUID/'), userID);
}

function unPair(userID){
    update(ref(database, "/"), {
        currPairingUID: null
    })
}

function updateSettings(userID, isNof, isAnimation, isDarkMode){
    console.log(userID);
    set(ref(database, 'users/' + userID + '/settings'), {
        isNof: isNof,
        isAnimation: isAnimation,
        isDarkMode: isDarkMode
    })
}

export function updateDataFire(){
    
}

export { authen, database, createUserData, pairDevice, unPair, updateSettings}