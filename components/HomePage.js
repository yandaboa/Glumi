import { Text, View, SafeAreaView, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import { general, home } from './../style/style.js';
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
    <View style={general.background}>
      <LinearGradient
        colors={['#66CC99', '#3399FF', '#CCCCFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={general.backgroundGradient}
      ></LinearGradient>
      <SafeAreaView>
        <View style={general.container}>
          <View style={home.sidebar}>
            <Sidebar />
          </View>
          <Animated.Text
            style={
              [general.title, {
                color: shift.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['#000', '#fff'],
                }),
              }]}
          >
            {Greeting()}
          </Animated.Text>
          <View style={home.mainInfograph}>
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
          </View>
        </View>
      </SafeAreaView>
    </View>
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