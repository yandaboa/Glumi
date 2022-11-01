import React, { useState, useRef } from 'react';
import { Text, View, ScrollView, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { pastData } from '../style/style.js';
import BloodSugarGraph from './BloodSugarGraph.js';
import BloodPressureGraph from './BloodPressureGraph.js';
import SproutSVG from '../assets/SproutSVG.js';
import { AceData, GulData, FoodData, BloodData } from './Data.js';
import { useFocusEffect } from '@react-navigation/native';
import { currUserName } from './Login.js';

export default () => {

  const vw = Dimensions.get("window").width;

  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const maxHeaderHeight = vw * .5;
  const minHeaderHeight = vw * .15;
  const scrollDistance = maxHeaderHeight - minHeaderHeight;

  const renderBloodPressureGraph = () => {
    if (BloodData.length < 1) {
      return (
        <Text>no data</Text>
      )
    } else {
      const BloodPressureData = BloodData[0];
      return (
        <BloodPressureGraph width={vw} data={{ systolic: BloodPressureData.systolic, diastolic: BloodPressureData.diastolic }} />
      )
    }
  }

  const differenceInDays = 1000 * 24 * 60 * 60;

  const pastDayData = [];
  const pastWeekData = [];

  if (AceData.length > 0) {
    let startDate = new Date(AceData[0].date).getTime();
    AceData.forEach((i) => {
      let iDate = new Date(i.date).getTime();
      if (Math.abs(startDate - iDate) / differenceInDays < 7) {
        pastWeekData.push(i);
        if (Math.abs(startDate - iDate) / differenceInDays < 1) {
          pastDayData.push(i);
        }
      }
    })
  }
  const animatedHeaderHeight = scrollOffsetY.interpolate({
    inputRange: [0, scrollDistance],
    outputRange: [maxHeaderHeight, minHeaderHeight],
    extrapolate: "clamp",
  })

  const [reload, setReload] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const unsub = () => {
        setReload(!reload);
      }
      return () => unsub();
    },)
  )

  const mainElements = [
    { title: "day", graph: <BloodSugarGraph width={vw * .6} data={pastDayData} title="Past Day (Acetone)" unit="ppm" label={true} /> },
    { title: "week", graph: <BloodSugarGraph width={vw * .6} data={pastWeekData} title="Past Week (Acetone)" unit="ppm" label={true} /> },
  ];

  const [mainActive, setMainActive] = useState(0);
  const [ref, setref] = useState(null);

  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide != mainActive) {
        setMainActive(slide)
      }
    }
  }

  const selectGraph = (i) => {
    setMainActive(i);
    ref.scrollTo({
      x: vw * i,
      y: 0,
      animated: true
    })
  }

  return (
    <View rel={reload} style={pastData.container}>
      <Animated.View
        style={[pastData.profile,
        { height: animatedHeaderHeight }
        ]}>
        <SproutSVG />
        <Text style={pastData.name}>{currUserName}</Text>
      </Animated.View>
      <ScrollView
        style={pastData.content}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={pastData.labelContainer}>
          {
            mainElements.map((i, index) =>
              <TouchableOpacity
                style={[mainActive == index ? pastData.labelActive : pastData.label, pastData.labelStyle]}
                key={"label" + index}
                onPress={() => selectGraph(index)}
              >
                <Text style={pastData.labelText}>
                  {i.title}
                </Text>
              </TouchableOpacity>
            )
          }
        </View>
        <View style={pastData.mainContainer}>
          <ScrollView
            ref={(ref) => {
              setref(ref);
            }}
            style={pastData.main}
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={500}
            pagingEnabled
          >
            {
              mainElements.map((i, index) =>
                <View style={pastData.mainContent} key={index}>
                  {i.graph}
                </View>
              )
            }
          </ScrollView>
        </View>
        <View style={pastData.wrapper}>
          <View style={pastData.content1}>
            <BloodSugarGraph width={vw * .4} data={GulData} title={"Glucometer"} label={false} />
          </View>
          <View style={pastData.content2}>
            {renderBloodPressureGraph()}
          </View>
        </View>
        <View style={pastData.wrapper}>
          <View style={pastData.content3}>
            <BloodSugarGraph width={vw * .65} data={FoodData} title={"Sugar Intaked"} unit="grams" label={true} />
          </View>
        </View>
        <View style={pastData.spacer} />
      </ScrollView>
    </View>
  );
}