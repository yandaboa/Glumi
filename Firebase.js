import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase, push, ref, set, update } from "firebase/database";

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
    set(ref(database, 'users/currPairingUID/'), userID);
}

function unPair(userID){
    update(ref(database, "/users/"), {
        currPairingUID: null
    })
}

function updateSettings(userID, isDarkMode){
    console.log(userID);
    set(ref(database, 'users/' + userID + '/settings'), {
        isDarkMode: isDarkMode
    })
}

function writeHealthData(dataType, key, val){

    const dataListRef = ref(database, 'users/' + authen.currentUser.uid + '/data/' + dataType + '/' + key);
    let temp = parseFloat(val);
    set(dataListRef, temp);
}

function editKey(dataType, key, value){

}

function editValue(dataType, key, value){

}

const getStringDate = (d) => {
    let date = new Date(d);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    return (month + "/" + day + "/" + year);
}

export function clearSpecData(type){
    set(ref(database, 'users/' + authen.currentUser.uid + '/data/' + type), {
    })
}

let test = getStringDate("02-01-1997T11:08");
console.log(test);


export { authen, database, writeHealthData,
createUserData, pairDevice, unPair, updateSettings, editKey, editValue};