import React, { useState, useRef, useFocusEffect } from 'react';
import { Text, View, ScrollView, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { pastData } from '../style/style.js';
import BloodSugarAnalysis from './BloodSugarAnalysis.js';
import BloodSugarGraph from './BloodSugarGraph.js';
import BloodPressureGraph from './BloodPressureGraph.js';
import SproutSVG from '../assets/SproutSVG.js';
import { AceData, GulData, FoodData } from './Data.js';
import { updateData } from './Data.js';

export default () => {
  // useFocusEffect(
  //   React.useCallback(() => {
  //     const unsubscribe = () => {updateData()};
  //     return () => unsubscribe();
  //   })
  //   );

  const vw = Dimensions.get("window").width;

  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const maxHeaderHeight = vw * .5;
  const minHeaderHeight = vw * .15;
  const scrollDistance = maxHeaderHeight - minHeaderHeight;

  const animatedHeaderHeight = scrollOffsetY.interpolate({
    inputRange: [0, scrollDistance],
    outputRange: [maxHeaderHeight, minHeaderHeight],
    extrapolate: "clamp",
  })

  const mainElements = [
    { title: "day", graph: <BloodSugarGraph width={vw * .6} data={AceData} title={"Today"} /> },
    { title: "week", graph: <BloodSugarGraph width={vw * .6} data={GulData} title="Past Week" /> },
    { title: "month", graph: <BloodSugarGraph width={vw * .6} data={FoodData} title="Past Month" /> },
  ];

  const [mainActive, setMainActive] = useState(0);
  const [ref, setref] = useState(null);

  onchange = (nativeEvent) => {
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
    <View style={pastData.container}>
      <Animated.View
        style={[pastData.profile,
        { height: animatedHeaderHeight }
        ]}>
        <SproutSVG />
        <Text style={pastData.name}>Bob Smith</Text>
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
            <Text>Graph 1</Text>
          </View>
          <View style={pastData.content2}>
            <BloodPressureGraph width={vw} data={{ systolic: 120, diastolic: 80 }} />
          </View>
        </View>
        <View style={pastData.wrapper}>
          <View style={pastData.content3}>
            <Text>Graph 4</Text>
          </View>
        </View>
        <View style={pastData.spacer} />
      </ScrollView>
    </View>
  );
}