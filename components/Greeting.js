import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { general, homescreen } from './../style/style.js';

export default function Greeting() {
    let greeting = "Good\nMorning";
    let time = new Date();
    if (time.getHours() > 18) {
      greeting = "Good\nAfternoon";
    } else if (time.getHours() > 12) {
      greeting = "Good\nEvening";
    }
    return greeting;
  }