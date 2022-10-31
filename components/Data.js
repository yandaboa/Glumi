import { authen, database, updateDataFire } from "../Firebase";
import { getDatabase, ref, onValue, onChildAdded } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { reloadData } from "./DeepHomePage";

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
export { dataBreathRef };

function wrapListenerAce() {
  dataBreathRef = ref(database, "/users/" + userID + "/data/Breathanalyzer/");

  onChildAdded(dataBreathRef, (data) => {
    console.log("Child added");
    let temp = data.key + ":00.000Z";
    AceData.push({ date: temp, value: data.val() });
    console.log("break");
  });
}

onAuthStateChanged(authen, (user) => {
  if (user != null) {
    userID = user.uid;
  }
  console.log(userID);
  dataBreathRef = ref(database, "/users/" + userID + "/data/");
  wrapListenerAce();
});

function wrapListenerGlu() {
  dataBreathRef = ref(database, "/users/" + userID + "/data/Glucometer/");
  onChildAdded(dataBreathRef, (data) => {
    console.log("Child added");
    let temp = data.key + ":00.000Z";
    GulData.push({ date: temp, value: data.val() });
    console.log("break");
  });
}
function wrapListenerFood() {
  dataBreathRef = ref(database, "/users/" + userID + "/data/Food/");
  onChildAdded(dataBreathRef, (data) => {
    console.log("Child added");
    let temp = data.key + ":00.000Z";
    FoodData.push({ date: temp, value: data.val() });
    console.log("break");
  });
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

export let AceData = [
  { date: "2022-02-01T05:00:00.000Z", value: Math.floor(Math.random() * 100) / 100 + .5 },
  { date: "2022-02-02T05:00:00.000Z", value: Math.floor(Math.random() * 100) / 100 + .5 },
  { date: "2022-02-03T05:00:00.000Z", value: Math.floor(Math.random() * 100) / 100 + .5 },
  { date: "2022-02-04T05:00:00.000Z", value: Math.floor(Math.random() * 100) / 100 + .5 },
  { date: "2022-02-05T05:00:00.000Z", value: Math.floor(Math.random() * 100) / 100 + .5 },
  { date: "2022-02-06T05:00:00.000Z", value: Math.floor(Math.random() * 100) / 100 + .5 },
  { date: "2022-02-07T05:00:00.000Z", value: Math.floor(Math.random() * 100) / 100 + .5 },
];

export let GulData = [
  { date: "2022-02-01T05:00:00.000Z", value: Math.floor(Math.random() * 100) + 25 },
  { date: "2022-02-02T05:00:00.000Z", value: Math.floor(Math.random() * 100) + 25 },
  { date: "2022-02-03T05:00:00.000Z", value: Math.floor(Math.random() * 100) + 25 },
  { date: "2022-02-04T05:00:00.000Z", value: Math.floor(Math.random() * 100) + 25 },
  { date: "2022-02-05T05:00:00.000Z", value: Math.floor(Math.random() * 100) + 25 },
  { date: "2022-02-06T05:00:00.000Z", value: Math.floor(Math.random() * 100) + 25 },
  { date: "2022-02-07T05:00:00.000Z", value: Math.floor(Math.random() * 100) + 25 },
];

export let FoodData = [
  { date: "2022-02-01T05:00:00.000Z", value: Math.floor(Math.random() * 30) },
  { date: "2022-02-02T05:00:00.000Z", value: Math.floor(Math.random() * 30) },
  { date: "2022-02-03T05:00:00.000Z", value: Math.floor(Math.random() * 30) },
  { date: "2022-02-04T05:00:00.000Z", value: Math.floor(Math.random() * 30) },
  { date: "2022-02-05T05:00:00.000Z", value: Math.floor(Math.random() * 30) },
  { date: "2022-02-06T05:00:00.000Z", value: Math.floor(Math.random() * 30) },
  { date: "2022-02-07T05:00:00.000Z", value: Math.floor(Math.random() * 30) },
];

export let BloodData = [
  { date: "2022-02-01T05:00:00.000Z", systolic: Math.floor(Math.random() * 80) + 60, diastolic: Math.floor(Math.random() * 30) + 60 },
  { date: "2022-02-02T05:00:00.000Z", systolic: Math.floor(Math.random() * 80) + 60, diastolic: Math.floor(Math.random() * 30) + 60 },
  { date: "2022-02-03T05:00:00.000Z", systolic: Math.floor(Math.random() * 80) + 60, diastolic: Math.floor(Math.random() * 30) + 60 },
  { date: "2022-02-04T05:00:00.000Z", systolic: Math.floor(Math.random() * 80) + 60, diastolic: Math.floor(Math.random() * 30) + 60 },
  { date: "2022-02-05T05:00:00.000Z", systolic: Math.floor(Math.random() * 80) + 60, diastolic: Math.floor(Math.random() * 30) + 60 },
  { date: "2022-02-06T05:00:00.000Z", systolic: Math.floor(Math.random() * 80) + 60, diastolic: Math.floor(Math.random() * 30) + 60 },
  { date: "2022-02-07T05:00:00.000Z", systolic: Math.floor(Math.random() * 80) + 60, diastolic: Math.floor(Math.random() * 30) + 60 },
];