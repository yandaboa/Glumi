import { View, Text } from 'react-native';
import { bloodSugarGraph, home } from '../style/style.js';

export default function BloodSugarAnalysis() {
  let standardBloodSugarMinimum = 100;
  let standardBloodSugarMax = 150;
  let standardBloodSugarXMax = 200;

  let currentBloodSugar = 90;
  let pastWeekBloodSugar = 90;

  let currentAverageBloodSugar = 90;
  let pastWeekAverageBloodSugar = 90;

  let bloodSugarAnalysis = "normal"
  let bloodSugarAnalysisClass = bloodSugarGraph.normal;
  if (currentBloodSugar > standardBloodSugarXMax) {
    bloodSugarAnalysis = "very high"
    bloodSugarAnalysisClass = bloodSugarGraph.high;
  } else if (currentBloodSugar > standardBloodSugarMax) {
    bloodSugarAnalysis = "high"
    bloodSugarAnalysisClass = bloodSugarGraph.midHighStyle;
  } else if (currentBloodSugar < standardBloodSugarMinimum) {
    bloodSugarAnalysis = "low"
    bloodSugarAnalysisClass = bloodSugarGraph.low;
  }
  let bloodSugarAverageAnalysis = "lower than"
  let bloodSugarAverageAnalysisClass = bloodSugarGraph.low;
  if (currentAverageBloodSugar > pastWeekAverageBloodSugar) {
    bloodSugarAverageAnalysis = "higher than"
    bloodSugarAverageAnalysisClass = bloodSugarGraph.high;
  } else if (currentAverageBloodSugar == pastWeekAverageBloodSugar) {
    bloodSugarAverageAnalysis = "on par "
    bloodSugarAverageAnalysisClass = bloodSugarGraph.normal;
  }

  return (
    <View style={home.analysisWrapper}>
      <Text style={home.gulcoseTitle}>Gulcose Levels</Text>
      <View style={home.analysisContainer}>
        <Text style={home.text}>
          <Text>Your blood sugar level is currently </Text>
          <Text style={bloodSugarAnalysisClass}>{bloodSugarAnalysis}</Text>
          <Text>. This weeks levels are </Text>
          <Text style={bloodSugarAverageAnalysisClass}>{bloodSugarAverageAnalysis}</Text>
          <Text>than levels last week.</Text>
        </Text>
      </View>
    </View>
  );
}
