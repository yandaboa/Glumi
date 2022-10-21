import { Text, View } from 'react-native';
import { home } from '../style/style.js';

export default function LogEvent() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Your Current Data</Text>
      </View>
      <View style={style.data1}>
        {/*this is going to be a vectrical slider, top is most recent and the bottom is the oldest */}
      </View>
      <View style={style.data2}></View>
    </View>
  );
}