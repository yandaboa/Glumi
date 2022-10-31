import { Text, View, ScrollView } from 'react-native';
import { logEvent } from '../style/style.js';
import { AceData, GulData, FoodData } from './Data.js';
import InputData from './InputData.js';

export default () => {
  return (
    <View style={logEvent.container}>
      <View style={logEvent.backgroundElement1} />
      <View style={logEvent.backgroundElement2} />
      <View style={logEvent.header}>
        <Text style={logEvent.title}>Your Current Data</Text>
      </View>
      <ScrollView style={logEvent.content}>
        <InputData data={AceData} title="Breathanalyzer" />
        <InputData data={GulData} title="Glucometer" />
        <InputData data={FoodData} title="Sugar Intaked" />
        <View style={logEvent.spacer} />
      </ScrollView>
    </View>
  );
}