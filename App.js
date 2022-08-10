import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {style} from './style/style.js';

export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Breathanalyzer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

