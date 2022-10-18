import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { home } from '../style/style.js';

export default function LogEvent() {
  return (
    <Text style={home.text} >
        Display past data here.
    </Text>
  );
}