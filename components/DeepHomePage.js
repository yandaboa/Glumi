import {
  Text,
  View,
  SafeAreaView,
  Animated,
  ScrollView,
  Dimensions
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import BloodSugarGraph from './BloodSugarGraph.js';
import BloodSugarAnalysis from './BloodSugarAnalysis.js';
import ExtendedBloodPressureGraph from './ExtendedBloodPressureGraph.js';
import { home } from './../style/style.js';

import LogEvent from './LogEvent.js';

import { AceData } from './Data.js';

import { authen, database } from '../Firebase.js';

import TreeSVG from '../assets/TreeSVG.js';
import DarkTreeSVG from '../assets/DarkTreeSVG.js';
import { onAuthStateChanged } from 'firebase/auth';
import { onChildAdded, ref } from 'firebase/database';
import { useFocusEffect } from '@react-navigation/native';

const dark = true; //!edit this

export default (props) => {

  const vw = Dimensions.get("window").width;

  const [sliderElementActive, setSliderElementActive] = useState(0);

  const sliderElements = [
    <BloodSugarAnalysis />,
    <ExtendedBloodPressureGraph width={vw * .8} data={{ systolic: 120, diastolic: 80 }} />,
  ]

  const scrolled = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide != sliderElementActive) {
        setSliderElementActive(slide)
      }
    }
  }

  const [aceGraph, setAceGraph] = useState(<BloodSugarGraph width={vw * .65} data={AceData} title={"Acetone Levels"} />);

  useFocusEffect(
    React.useCallback(() => {
      console.log(AceData);
      const unsubscribe = () => { setAceGraph(<BloodSugarGraph width={vw * .65} data={AceData} title={"Acetone Levels"} />); }
      return () => unsubscribe();
    },
    ))

  onAuthStateChanged(authen, (user) => {
    const unsub = () => { setAceGraph(<BloodSugarGraph width={vw * .65} data={AceData} title={"Acetone Levels"} />) };
    return () => unsub();
  });

  const background = () => {
    if (dark) {
      return (<DarkTreeSVG />);
    } else {
      return (<TreeSVG />);
    }
  }

  return (
    <View style={home.container}>
      <View style={home.backgroundContainer}>
        {background()}
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
              {aceGraph}
            </View>
          </View>
          <View style={home.slider}>
            <Text style={[home.heading, home.sliderHeading]}>Discover More!</Text>
            <ScrollView
              onScroll={({ nativeEvent }) => scrolled(nativeEvent)}
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