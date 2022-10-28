import React, { useState } from 'react'
import { Text, View, ScrollView, Fragment, Dimensions } from 'react-native';
import { logEvent } from '../style/style.js';
import AddSVG from '../assets/AddSVG.js';
import EditSVG from '../assets/EditSVG.js';
import { AceData, GulData, FoodData } from './Data.js';
import InputData from './InputData.js';
import SelectList from 'react-native-dropdown-select-list'


export default () => {
  const vw = Dimensions.get("window").width;

  const formatData = (d) => {
    let formatedData = [];
    const sortData = d.sort(
      (x, y) => Number(new Date(x.date)) - Number(new Date(y.date)),
    );
    let a = [];
    let temp = sortData[0];
    for (let i = 0; i < sortData.length; i++) {
      let iDate = new Date(sortData[i].date);
      let tempDate = new Date(temp.date);
      if (
        iDate.getFullYear() == tempDate.getFullYear()
        && iDate.getMonth() == tempDate.getMonth()
        && iDate.getDate() == tempDate.getDate()
      ) {
        a.push(sortData[i]);
      } else {
        formatedData.push(a);
        temp = sortData[i];
        a = [sortData[i]];
      }
    }
    formatedData.push(a);
    return formatedData
  }

  const padDate = (d) => {
    if (d < 10) {
      return "0" + d;
    } else {
      return d;
    }
  }

  const [sliderElementActive, setSliderElementActive] = useState(0);
  const [ref, setref] = useState(null);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / vw);
      if (slide != sliderElementActive) {
        setSliderElementActive(slide)
      }
    }
  }

  const stringifyDate = (i) => {
    return (i.toLocaleString("en-US", { month: "short" }) + " " + i.getDate());
  }

  const dataSet = (d, index, title) => {
    let key = title + index;
    let date = new Date(d[0].date);
    return (
      <View key={key}>
        <ScrollView
          style={logEvent.data}
          vertical={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          <View style={logEvent.dataContainer}>
            <View style={[logEvent.dataElement, logEvent.leader]}>
              <Text style={logEvent.leaderText}>time</Text>
              <Text style={logEvent.leaderText}>data</Text>
              <Text style={logEvent.leaderText}>edit</Text>
            </View>
            {
              d.map((i, index) =>
                <View style={
                  [logEvent.dataElement, logEvent.first]}
                  key={"d" + index}
                >
                  <Text style={logEvent.dataText}>
                    {padDate(new Date(i.date).getHours()) + ":" + padDate(new Date(i.date).getMinutes())}
                  </Text>
                  <Text style={logEvent.dataText}>{i.value}</Text>
                  <View style={logEvent.iconContainer}>
                    <EditSVG />
                  </View>
                </View>
              )
            }
            <View style={logEvent.add}>
              <AddSVG style={logEvent.icon} />
            </View>
            <View style={logEvent.filler} />
          </View>
        </ScrollView>
      </View>
    );
  }

  const [selected, setSelected] = React.useState("");

  const Select = (d) => {
    let dateString = [];
    d.forEach((i) => {
      let date = new Date(i.date);
      let dateStringify = stringifyDate(date);
      if (dateString.indexOf(dateStringify) === -1) {
        dateString.push(dateStringify)
      }
    });
    return (
      <View style={logEvent.dropbarContainer}>
        <SelectList
          onSelect={() => { dateSelected(dateString.indexOf(selected)) }}
          setSelected={setSelected}
          data={dateString}
          defaultOption={{ key: sliderElementActive, value: dateString[sliderElementActive] }}
          search={true}
          inputStyles={{
            color: "#000",
            fontFamily: "BalooTamma2-Medium",
            fontSize: vw * .04,
          }}
          boxStyles={{
            borderRadius: vw * .03,
            border: "none",
            backgroundColor: "#fff",
          }}
          dropdownStyles={{
            backgroundColor: "#fff"
          }}
          dropdownItemStyles={{
            margin: vw * .02
          }}
          dropdownTextStyles={{
            fontFamily: "BalooTamma2-Medium",
            fontSize: vw * .04,
            color: "#000",
          }}
          maxHeight={vw * .5}
        />
      </View>
    );
  }

  const dateSelected = (i) => {
    ref.scrollTo({
      x: vw * i,
      y: 0,
      animated: true
    })
  }

  return (
    <View style={logEvent.container}>
      <View style={logEvent.backgroundElement1} />
      <View style={logEvent.backgroundElement2} />
      <View style={logEvent.header}>
        <Text style={logEvent.title}>Your Current Data</Text>
      </View>
      <ScrollView style={logEvent.content}>
        <InputData data={AceData} title="Breathanalyzer " />
        <InputData data={GulData} title="Glucometer " />
        <InputData data={FoodData} title="Sugar Intaked " />
      </ScrollView>
    </View>
  );
}