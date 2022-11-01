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

import { AceData, BloodData } from './Data.js';

import { authen, database } from '../Firebase.js';

import TreeSVG from '../assets/TreeSVG.js';
import DarkTreeSVG from '../assets/DarkTreeSVG.js';
import { onAuthStateChanged } from 'firebase/auth';
import { onChildAdded, ref, onValue } from 'firebase/database';
import { useFocusEffect } from '@react-navigation/native';

// const dark = false; //!edit this

export default (props) => {

  const [dark, setDark] = useState(false);

  const vw = Dimensions.get("window").width;

  const [sliderElementActive, setSliderElementActive] = useState(0);

  const convertedAceData = [];

  const sliderElements = [
    <BloodSugarAnalysis />,
  ];

  if (BloodData.length < 1) {
    sliderElements.push(<Text> no data</Text>)
  } else {
    const BloodPressureData = BloodData[0];
    sliderElements.push(<ExtendedBloodPressureGraph width={vw * .8} data={{ systolic: BloodPressureData.systolic, diastolic: BloodPressureData.diastolic }} />);
  }

  let conversion = 107;
  AceData.forEach((i) => {
    convertedAceData.push({ date: i.date, value: i.value * conversion })
  });

  const scrolled = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide != sliderElementActive) {
        setSliderElementActive(slide)
      }
    }
  }

  const [aceGraph, setAceGraph] = useState(<BloodSugarGraph width={vw * .65} data={convertedAceData} title={"Gulcose Levels (breathanalyzer)"} unit="mg/dL" label={true} />);

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = () => {
        console.log("homepage focused");
        setAceGraph(<BloodSugarGraph width={vw * .65} data={convertedAceData} title={"Gulcose Levels (breathanalyzer)"} unit="mg/dL" label={true} />);
        const darkModeRef = ref(database, 'users/' + authen.currentUser.uid);
        onValue(darkModeRef, (snapshot) => {
          const data = snapshot.val();
          if (data.settings != null) {
            setDark(data.settings.isDarkMode);
          }
        })
      }
      return () => unsubscribe();
    },
    ))

  onAuthStateChanged(authen, (user) => {
    const unsub = () => { setAceGraph(<BloodSugarGraph width={vw * .65} data={convertedAceData} title={"Gulcose Levels (breathanalyzer)"} unit="mg/dL" label={true} />) };
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
    <View dark={dark} style={home.container}>
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