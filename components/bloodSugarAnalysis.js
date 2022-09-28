import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { general, homescreen } from '../style/style.js';

export default function BloodSugarAnalysis() {
    let analysis = `
    This is a summary of the data on the Acetone Graph place holder
    `
    return (
      <Text style={general.text}>
        {analysis}
      </Text>
    );
  }
  