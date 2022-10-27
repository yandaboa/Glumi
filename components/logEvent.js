import { Text, View, ScrollView, Dimensions, Image, SafeAreaView } from 'react-native';
import { logEvent } from '../style/style.js';
import AddSVG from '../assets/AddSVG.js';
import EditSVG from '../assets/EditSVG.js';
import { Data, Data2, Data3, Data4 } from './Data.js';

export default () => {
  console.log(new Date(Data[6].date).toLocaleString('en-US', { month: "short" }) + " " + new Date(Data[6].date).getDay());

  console.log(Data);
  const formatData = (d) => {
    let formatedData = [];
    const sortData = d.sort(
      (x, y) => Number(new Date(x.date)) - Number(new Date(y.date)),
    );
    console.log(sortData.length);
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
  // let x = new Date(i.date).toLocaleString('en-US', { month: "short" }) + " " + new Date(i.date).getDate()

  const dataSet = (d, index) => {
    let date = new Date(d[0].date);
    return (
      <>
        <Text
          style={logEvent.dateLabel}
          key={Math.random()}
        >{date.toLocaleString("en-US", { month: "short" }) + " " + date.getDate()}</Text>
        <ScrollView
          key={Math.random()}
          style={logEvent.data}
          vertical={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          <View style={[logEvent.dataElement, logEvent.leader]}>
            <Text style={logEvent.leaderText}>time</Text>
            <Text style={logEvent.leaderText}>data</Text>
            <Text style={logEvent.leaderText}>edit</Text>
          </View>
          {
            d.map((i, index) =>
              <View style={[logEvent.dataElement, logEvent.first]} key={Math.random()}>
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
        </ScrollView>
      </>
    );
  }

  return (
    <View style={logEvent.container}>
      <View style={logEvent.backgroundElement1} />
      <View style={logEvent.backgroundElement2} />
      <View style={logEvent.header}>
        <Text style={logEvent.title}>Your Current Data</Text>
      </View>
      <ScrollView style={logEvent.content}>
        <View style={logEvent.heading}>
          <Text style={logEvent.headingText}>Breathanalyzer Data</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          {
            formatData(Data).map((i, index) =>
              dataSet(i, index)
            )
          }
        </ScrollView>
        <View style={logEvent.heading}>
          <Text style={logEvent.headingText}>Glucometer Data</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          {
            formatData(Data2).map((i, index) =>
              dataSet(i, index)
            )
          }
        </ScrollView>
        <View style={logEvent.heading}>
          <Text style={logEvent.headingText}>Sugar Intaked</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          {
            formatData(Data3).map((i, index) =>
              dataSet(i, index)
            )
          }
        </ScrollView>
        <View style={logEvent.spacer} />
      </ScrollView>
    </View>
  );
}