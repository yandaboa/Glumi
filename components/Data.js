import { authen, updateDataFire } from "../Firebase";

// export const Data = [
//   { date: '2022-02-01T05:00:00.000Z', value: 250 },
//   { date: '2022-02-02T05:00:00.000Z', value: 300.35 },
//   { date: '2022-02-03T05:00:00.000Z', value: 150.84 },
//   { date: '2022-02-04T05:00:00.000Z', value: 500.92 },
//   { date: '2022-02-05T05:00:00.000Z', value: 200.8 },
//   { date: '2022-02-06T05:00:00.000Z', value: 150.47 },
//   { date: '2022-02-07T05:00:00.000Z', value: 100.47 },
// ]; 26th, 2

export function updateData(){
  updateDataFire();
}

export const AceData = [
  { date: '2022-02-02T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-02T05:01:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-04T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-05T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-06T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-07T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-08T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
];

export const GulData = [
  { date: '2022-02-01T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-02T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-03T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-04T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-05T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-06T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-07T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
];

export const FoodData = [
  { date: '2022-02-01T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-02T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-03T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-04T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-05T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-06T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
  { date: '2022-02-07T05:00:00.000Z', value: Math.floor(Math.random() * 1000) },
];