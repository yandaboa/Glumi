import { Text, View, ScrollView, Dimensions } from 'react-native';
import { logEvent } from '../style/style.js';

export default function LogEvent() {
  return (
    <View style={logEvent.container}>
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
          <View style={logEvent.data1Element}></View>
          <View style={logEvent.data1Element}></View>
          <View style={logEvent.data1Element}></View>
          <View style={logEvent.data1Element}></View>
          <View style={logEvent.data1Element}></View>
          <View style={logEvent.data1Element}></View>
          <View style={logEvent.data1Element}></View>
          <View style={logEvent.data1Element}></View>
          {/*this is going to be a vectrical slider, top is most recent and the bottom is the oldest */}
        </ScrollView>
        <ScrollView style={logEvent.data1}
          vertical={true}
          contentContainerStyle={Dimensions.get("window").width}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          <View style={logEvent.data1Element}>
            <View style={logEvent.date}>
              <Text style={logEvent.dateText}></Text>
            </View>
            <View style={logEvent.data}>
              <Text style={logEvent.dataText}></Text>
            </View>
          </View>
          <View style={logEvent.data1Element}></View>
          <View style={logEvent.data1Element}></View>
          <View style={logEvent.data1Element}></View>
          <View style={logEvent.data1Element}></View>
          <View style={logEvent.data1Element}></View>
          <View style={logEvent.data1Element}></View>
          <View style={logEvent.data1Element}></View>
          {/*this is going to be a vectrical slider, top is most recent and the bottom is the oldest */}
        </ScrollView>
      </View>
    </View>
  );
}