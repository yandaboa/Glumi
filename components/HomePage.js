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
        <View style={general.container}>
          <View style={homescreen.sideBar}>
            <Sidebar />
          </View>
          <Text style={general.title}>
            {Greeting()}
          </Text>
          <View style={homescreen.mainInfograph}>
            <BloodSugarGraph />
          </View>
          <View style={homescreen.subContent}>
            <View style={homescreen.infographAnalysis}>
              <BloodSugarAnalysis />
            </View>
            <View style={homescreen.inputData}>
              <LogEvent />
            </View>
          </View>
          <View style={homescreen.bloodPressure}>
            <BloodPressureGraph />

          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

function Greeting() {
  let greeting = "Good\nMorning";
  let time = new Date();
  if (time.getHours() > 18) {
    greeting = "Good\nEvening";
  } else if (time.getHours() > 12) {
    greeting = "Good\nAfternoon";
  }
  return greeting;
}