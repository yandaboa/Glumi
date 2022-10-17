import { Text, View, SafeAreaView, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import { home } from './../style/style.js';
import { LinearGradient } from 'expo-linear-gradient';
import BloodSugarGraph from './BloodSugarGraph.js';
import Sidebar from './Sidebar.js';
import BloodSugarAnalysis from './BloodSugarAnalysis.js';
import LogEvent from './LogEvent.js';
import BloodPressureGraph from './BloodPressureGraph.js';



export default () => {

  const shift = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(shift, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView>
      <View style={home.container}>
        <View style={home.background}>
        </View>
        <Animated.Text
          style={
            [home.title, {
              color: shift.interpolate({
                inputRange: [0, 100],
                outputRange: ['#000', '#fff'],
              }),
            }]}
        >
          {Greeting()}
        </Animated.Text>
        <Animated.Text
          style={
            [home.subtitle, {
              color: shift.interpolate({
                inputRange: [0, 100],
                outputRange: ['#000', '#fff'],
              }),
            }]}
        >
          {getDate()}
        </Animated.Text>
        {/* <View style={home.mainInfograph}>
          <View style={home.mainInfographContent}>
            <BloodSugarGraph />
          </View>
        </View>
        <View style={home.subContent}>
          <View style={home.infographAnalysis}>
            <BloodSugarAnalysis />
          </View>
          <View style={home.inputData}>
            <LogEvent />
          </View>
        </View>
        <View style={home.bloodPressure}>
          <View style={home.bloodPressureContent}>
            <BloodPressureGraph />
          </View>
        </View> */}
        <Sidebar />
      </View>
    </SafeAreaView>
  );
}

function Greeting() {
  let greeting = "Good Morning";
  let time = new Date();
  if (time.getHours() > 18) {
    greeting = "Good Evening";
  } else if (time.getHours() > 12) {
    greeting = "Good Afternoon";
  }
  return greeting;
}

function getDate() {
  let date = new Date();
  let month = date.toLocaleString('default', { month: 'long' });
  let day = date.getDate();
  return `${month}, ${day}`;
}