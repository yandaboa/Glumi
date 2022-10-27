import { Text, View, ScrollView, Dimensions, Image, SafeAreaView } from 'react-native';
import { logEvent } from '../style/style.js';
import AddSVG from '../assets/AddSVG.js';
import EditSVG from '../assets/EditSVG.js';
import { Data, Data2, Data3, Data4 } from './Data.js';
export default () => {
  console.log(new Date(Data[6].date).toLocaleString('en-US', { month: "short" }) + " " + new Date(Data[6].date).getDay());


  console.log(Data);
  let formatedData = [];
  const formatData = (d) => {
    const sortData = d.sort(
      (x, y) => Number(x.date) - Number(y.date),
    );
    console.log(sortData);
  }
  formatData(Data);
  // let x = new Date(i.date).toLocaleString('en-US', { month: "short" }) + " " + new Date(i.date).getDate()

  const dataSet = (d) => {
    return (
      <ScrollView style={logEvent.data}
        vertical={true}
        contentContainerStyle={Dimensions.get("window").width}
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
            <View style={[logEvent.dataElement, logEvent.first]} key={"data" + index}>
              <Text style={logEvent.dataText}>
                {new Date(i.date).getHours().padStart(2, '0') + ":" + new Date(i.date).padStart(2, '0').getMinutes()}
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
    );
  }


  // <View style={logEvent.backgroundElement1} />
  //     <View style={logEvent.backgroundElement2} />

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
        <View style={logEvent.dataTitle}>
          <Text style={logEvent.headerText}></Text>
          <Text style={logEvent.searchSelection}></Text>
        </View>
        {dataSet(Data)}
        <View style={logEvent.heading}>
          <Text style={logEvent.headingText}>Glucometer Data</Text>
        </View>
        {dataSet(Data2)}
        <View style={logEvent.heading}>
          <Text style={logEvent.headingText}>Sugar Intaked</Text>
          <Text>{ }</Text>
        </View>
        {dataSet(Data3)}
        <View style={logEvent.spacer} />
      </ScrollView>
    </View>
  );
}