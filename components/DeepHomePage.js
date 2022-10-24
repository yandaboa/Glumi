import {
  Text,
  View,
  SafeAreaView,
  Animated,
  ImageBackground,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { useEffect, useRef } from 'react';
import { home } from './../style/style.js';
import BloodSugarGraph from './BloodSugarGraph.js';
import BloodSugarAnalysis from './BloodSugarAnalysis.js';
import BloodPressureGraph from './BloodPressureGraph.js';
import LogEvent from './LogEvent.js';
import { authen } from '../Firebase.js';

import TreeSVG from '../assets/TreeSVG.js';

export default () => {

  // const shift = useRef(new Animated.Value(0)).current;
  // useEffect(() => {
  //   Animated.timing(shift, {
  //     toValue: 100,
  //     duration: 1000,
  //     useNativeDriver: true,
  //   }).start();
  // }, []);

  // <Animated.Text style={[home.title, {
  //   color: shift.interpolate({
  //     inputRange: [0, 100],
  //     outputRange: ['#000', '#fff'],
  //   }),
  // }]}>
  //   {Greeting()}
  // </Animated.Text>

  const sidebarStyle = home.sidebar;
  return (<TreeSVG />)

  return (
    <View style={home.container}>
      <TreeSVG />
      <Text style={home.title}>
        {Greeting()}
      </Text>
      <Text style={home.subtitle}>
        {getDate()}
      </Text>
      <View style={home.content}>
        <View style={home.summary}>
          <Text style={home.heading}>Summary</Text>
          <BloodSugarGraph />
        </View>
        <View style={home.slider}>
          <Text style={[home.heading, home.sliderHeading]}>Discover More!</Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={Dimensions.get("window").width}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled
            style={home.sliderContainer}
          >
            <View style={home.sliderElement}>
              <BloodSugarAnalysis />
            </View>
            <View style={home.sliderElement}>
              <Text>Yo this kiddo was special, how amazing. Srry, but lorem ispum .... time</Text>
            </View>
            <View style={home.sliderElement}>
              <BloodSugarAnalysis />
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={home.spacer} />
    </View>
  );
}

function Greeting() {
  let greeting = "Good Morning";

  // let greeting = "Good Morning " + authen.currentUser.email;
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
  let year = date.getFullYear();
  let month = date.toLocaleString('default', { month: 'long' });
  let day = date.getDate();
  return `${year} ${month} ${day}`;
}