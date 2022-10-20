import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { pastData } from '../style/style.js';

export default () => {
  return (
    <View>
      <View style={pastData.background}></View>
      <View style={pastData.container}></View>
    </View>
  );
}