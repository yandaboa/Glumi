import { authen, clearSpecData, database, updateDataFire } from "../Firebase";
import { getDatabase, ref, onValue, onChildAdded } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { reloadData } from "./DeepHomePage";
import { updateFood, updateGlu, updateAce } from "./InputData";

// export const Data = [
//   { date: '2022-02-01T05:00:00.000Z', value: 250 },
//   { date: '2022-02-02T05:00:00.000Z', value: 300.35 },
//   { date: '2022-02-03T05:00:00.000Z', value: 150.84 },
//   { date: '2022-02-04T05:00:00.000Z', value: 500.92 },
//   { date: '2022-02-05T05:00:00.000Z', value: 200.8 },
//   { date: '2022-02-06T05:00:00.000Z', value: 150.47 },
//   { date: '2022-02-07T05:00:00.000Z', value: 100.47 },
// ]; 26th, 2

let userID = 0;

let dataBreathRef = ref(database, 'users/' + userID + '/data/Breathanalyzer/');
let dataGluRef = ref(database, 'users/' + userID + '/data/Glucometer/');
let dataFoodRef = ref(database, 'users/' + userID + '/data/Food/');

export { dataBreathRef };

function wrapListenerAce() {
  dataBreathRef = ref(database, "/users/" + userID + "/data/Breathanalyzer/");

  onChildAdded(dataBreathRef, (data) => {
    let temp = data.key + ":00.000Z";
    AceData.push({ date: temp, value: data.val() });
    updateAce();
  });
}

onAuthStateChanged(authen, (user) => {
  if (user != null) {
    userID = user.uid;
  }
  console.log(userID);
  wrapListenerAce();
  wrapListenerGlu();
  wrapListenerFood();
  wrapListenerBloodPress();
});

function wrapListenerGlu() {
  dataGluRef = ref(database, "/users/" + userID + "/data/Glucometer/");
  onChildAdded(dataGluRef, (data) => {
    let temp = data.key + ":00.000Z";
    GulData.push({ date: temp, value: data.val() });
    // updateGlu();
  });
}
function wrapListenerFood() {
  dataFoodRef = ref(database, "/users/" + userID + "/data/Food/");
  onChildAdded(dataFoodRef, (data) => {
    let temp = data.key + ":00.000Z";
    FoodData.push({ date: temp, value: data.val() });
    // updateFood();
  });
}

function wrapListenerBloodPress() {
  dataFoodRef = ref(database, "/users/" + userID + "/data/BloodPress/");
  onChildAdded(dataFoodRef, (data) => {
    let temp = data.key + ":00.000Z";
    let stringVal = data.val();
    console.log(stringVal);
    let temp2 = stringVal.split(" ");
    let systolic = temp2[0];
    let diastolic = temp2[1];
    BloodData.push({ date: temp, systolic: systolic, diastolic: diastolic });
    // updateFood();
  });
}

export function clearSpecificData(type){
  if(type==="Breathanalyzer"){
    while (AceData.length > 0) {
      AceData.pop();
    }
    clearSpecData("Breathanalyzer");
  } else if(type === "Glucometer"){
    while (GulData.length > 0) {
      GulData.pop();
    }
    clearSpecData("Glucometer");
  } else {
    while (FoodData.length > 0) {
      FoodData.pop();
    }
    clearSpecData("Food");

  }
}

export function clearData() {
  while (AceData.length > 0) {
    AceData.pop();
  }

  while (GulData.length > 0) {
    GulData.pop();
  }

  while (FoodData.length > 0) {
    FoodData.pop();
  }
}

export let AceData = [];

export let GulData = [];

export let FoodData = [];

export let BloodData = [
  // { date: "2022-02-01T05:00:00.000Z", systolic: Math.floor(Math.random() * 80) + 60, diastolic: Math.floor(Math.random() * 30) + 60 },
  // { date: "2022-02-02T05:00:00.000Z", systolic: Math.floor(Math.random() * 80) + 60, diastolic: Math.floor(Math.random() * 30) + 60 },
  // { date: "2022-02-03T05:00:00.000Z", systolic: Math.floor(Math.random() * 80) + 60, diastolic: Math.floor(Math.random() * 30) + 60 },
  // { date: "2022-02-04T05:00:00.000Z", systolic: Math.floor(Math.random() * 80) + 60, diastolic: Math.floor(Math.random() * 30) + 60 },
  // { date: "2022-02-05T05:00:00.000Z", systolic: Math.floor(Math.random() * 80) + 60, diastolic: Math.floor(Math.random() * 30) + 60 },
  // { date: "2022-02-06T05:00:00.000Z", systolic: Math.floor(Math.random() * 80) + 60, diastolic: Math.floor(Math.random() * 30) + 60 },
  // { date: "2022-02-07T05:00:00.000Z", systolic: Math.floor(Math.random() * 80) + 60, diastolic: Math.floor(Math.random() * 30) + 60 },
];