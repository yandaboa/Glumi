import {
  Text,
  View,
  SafeAreaView,
  Animated,
  ScrollView,
  Dimensions
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { home } from './../style/style.js';
import BloodSugarGraph from './BloodSugarGraph.js';
import BloodSugarAnalysis from './BloodSugarAnalysis.js';
import BloodPressureGraph from './BloodPressureGraph.js';
import LogEvent from './LogEvent.js';

import { Data } from './Data.js';

import { authen } from '../Firebase.js';

import TreeSVG from '../assets/TreeSVG.js';
import DarkTreeSVG from '../assets/DarkTreeSVG.js';


export default () => {

  const vw = Dimensions.get("window").width;

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

  const [sliderElementActive, setSliderElementActive] = useState(0);

  const sliderElements = [
    <BloodSugarAnalysis />,
    <BloodSugarAnalysis />,
    <BloodSugarAnalysis />,
  ]

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide != sliderElementActive) {
        setSliderElementActive(slide)
      }
    }
  }

  return (
    <View style={home.container}>
      <View style={home.backgroundContainer}>
        <TreeSVG />
      </View>
      <SafeAreaView style={home.wrapper}>
        <Text style={home.title}>
          {Greeting()}
        </Text>
        <Text style={home.subtitle}>
          {getDate()}
        </Text>
        <View style={home.content}>
          <View style={home.summary}>
            <Text style={home.heading}>Summary</Text>
            <View style={home.graphContainer}>
              <BloodSugarGraph width={vw * .65} data={Data} title={"Acetone Levels"} />
            </View>
          </View>
          <View style={home.slider}>
            <Text style={[home.heading, home.sliderHeading]}>Discover More!</Text>
            <ScrollView
              onScroll={({ nativeEvent }) => onchange(nativeEvent)}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              scrollEventThrottle={200}
              style={home.sliderContainer}
            >
              {
                sliderElements.map((i, index) =>
                  <View style={home.sliderElement} key={index}>
                    <View style={home.sliderContent}>
                      {i}
                    </View>
                  </View>
                )
              }
            </ScrollView>
            <View style={home.dotContainer}>
              {
                sliderElements.map((i, index) =>
                  <View
                    key={"dot" + index}
                    style={sliderElementActive == index ? home.dotActive : home.dot}
                  />
                )
              }
            </View>
          </View>
        </View>
        <View style={home.spacer} />
      </SafeAreaView>
    </View>
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
  let year = date.getFullYear();
  let month = date.toLocaleString('default', { month: 'long' });
  let day = date.getDate();
  return `${year} ${month} ${day}`;
}