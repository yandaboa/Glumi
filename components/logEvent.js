import { Text, View, ScrollView, Dimensions, Image, SafeAreaView } from 'react-native';
import { logEvent } from '../style/style.js';
import AddSVG from '../assets/AddSVG.js';
import EditSVG from '../assets/EditSVG.js';
import { Data, Data2, Data3, Data4 } from './Data.js';
export default () => {
  console.log(new Date(Data[6].date).toLocaleString('en-US', { month: "short" }) + " " + new Date(Data[6].date).getDay());

  return (
    <View style={logEvent.container}>
      <View style={logEvent.background}>
        <View style={logEvent.backgroundElement1} />
        <View style={logEvent.backgroundElement2} />
      </View>
      <View style={logEvent.header}>
        <Text style={logEvent.title}>Your Current Data</Text>
      </View>
      <View style={logEvent.content}>
        <ScrollView style={logEvent.data1}
          vertical={true}
          contentContainerStyle={Dimensions.get("window").width}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          <View style={[logEvent.data1Element, logEvent.leader]}>
            <Text style={logEvent.leaderText}>date</Text>
            <Text style={logEvent.leaderText}>data</Text>
            <Text style={logEvent.leaderText}>edit</Text>
          </View>
          {
            Data.map((i, index) =>
              <View style={[logEvent.data1Element, logEvent.first]} key={"data" + index}>
                <Text style={logEvent.dataText}>
                  {new Date(i.date).toLocaleString('en-US', { month: "short" }) + " " + new Date(i.date).getDay()}
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
        <ScrollView style={logEvent.data1}
          vertical={true}
          contentContainerStyle={Dimensions.get("window").width}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          <View style={[logEvent.data1Element, logEvent.leader]}>
            <Text style={logEvent.leaderText}>date</Text>
            <Text style={logEvent.leaderText}>data</Text>
            <Text style={logEvent.leaderText}>edit</Text>
          </View>
          {
            Data2.map((i, index) =>
              <View style={[logEvent.data1Element, logEvent.first]} key={"data" + index}>
                <Text style={logEvent.dataText}>
                  {new Date(i.date).toLocaleString('en-US', { month: "short" }) + " " + new Date(i.date).getDay()}
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
        <View style={logEvent.spacer} />
      </View>
    </View>
  );
}