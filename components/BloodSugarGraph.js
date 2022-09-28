import { Text, SafeAreaView } from 'react-native';
import { general, sugarGraph } from './../style/style';

export default function BloodSugarGraph() {
  const sugarData = [95, 99, 112, 100, 130, 140];
  let yHideRatio = 0.8;
  let defaultMax = 250;

  return (
    <SafeAreaView>
      <Text>
        {sugarData[1]}
      </Text>
    </SafeAreaView>);
}