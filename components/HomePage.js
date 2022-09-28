import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { general, homescreen } from './../style/style.js';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import BloodSugarGraph from './BloodSugarGraph.js';
import Sidebar from './Sidebar.js';
import BloodSugarAnalysis from './BloodSugarAnalysis.js';
import LogEvent from './LogEvent.js';
import BloodPressureGraph from './BloodPressureGraph.js';

export default function HomePage() {
  return (
    <LinearGradient
      colors={['#66CC99', '#3399FF', '#CCCCFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={general.background}
    >
      <SafeAreaView>
        <ScrollView style={general.container}>
          <View style={homescreen.sideBar}>
            <Sidebar />
          </View>
          <SafeAreaView style={homescreen.container}>
            <Text style={general.title}>
              {Greeting()}
            </Text>
          </SafeAreaView>
          <SafeAreaView style={homescreen.mainInfograph}>
            <BloodSugarGraph />
          </SafeAreaView>
          <SafeAreaView style={homescreen.subContent}>
            <SafeAreaView style={homescreen.inforgraphAnalysis}>
              <BloodSugarAnalysis />
            </SafeAreaView>
            <SafeAreaView style={homescreen.inputData}>
              <LogEvent />
            </SafeAreaView>
          </SafeAreaView>
          <View style={homescreen.bloodPressure}>
            <BloodPressureGraph />

          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

function Greeting() {
  let greeting = "Good\nMorning";
  let time = new Date();
  if (time.getHours() > 18) {
    greeting = "Good\nAfternoon";
  } else if (time.getHours() > 12) {
    greeting = "Good\nEvening";
  }
  return greeting;
}