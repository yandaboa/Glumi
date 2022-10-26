import { useState } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { pastData } from '../style/style.js';
import BloodSugarAnalysis from './BloodSugarAnalysis.js';
import BloodSugarGraph from './BloodSugarGraph.js';
import SproutSVG from '../assets/SproutSVG.js';
import { Data2, Data3, Data4 } from './Data.js';

export default () => {
  const vw = Dimensions.get("window").width;

  const mainElements = [
    { title: "day", graph: <BloodSugarGraph width={vw * .6} data={Data2} title={"Today"} /> },
    { title: "week", graph: <BloodSugarGraph width={vw * .6} data={Data3} title="Past Week" /> },
    { title: "month", graph: <BloodSugarGraph width={vw * .6} data={Data4} title="Past Month" /> },
  ];

  const [mainActive, setMainActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide != mainActive) {
        setMainActive(slide)
      }
    }
  }

  return (
    <ScrollView style={pastData.container}>
      <View style={pastData.top}>
        <View style={pastData.profile}>
          <SproutSVG />
          <Text style={pastData.name}>Bob Smith</Text>
        </View>
      </View>
      <ScrollView style={pastData.content}>
        <View style={pastData.labelContainer}>
          {
            mainElements.map((i, index) =>
              <View
                style={[mainActive == index ? pastData.labelActive : pastData.label, pastData.labelStyle]}
                key={"label" + index}
              >
                <Text style={pastData.labelText}>
                  {i.title}
                </Text>
              </View>
            )
          }
        </View>
        <View style={pastData.mainContainer}>
          <ScrollView
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
            <Text>Graph 2</Text>
          </View>
        </View>
        <View style={pastData.wrapper}>
          <View style={pastData.content2}>
            <Text>Graph 3</Text>
          </View>
          <View style={pastData.content2}>
            <Text>Graph 4</Text>
          </View>
        </View>
        <View style={pastData.spacer} />
      </ScrollView>
    </ScrollView>
  );
}