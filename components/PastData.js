import { Text, View } from 'react-native';
import { pastData } from '../style/style.js';
import BloodSugarAnalysis from './BloodSugarAnalysis.js';
import BloodSugarGraph from './BloodSugarGraph.js';
import SproutSVG from '../assets/SproutSVG.js';

export default () => {
  return (
    <>
      <View style={pastData.background}>
      </View>
      <View style={pastData.container}>
        <View style={pastData.top}>
          <View style={pastData.profile}>
            <SproutSVG />
            <Text style={pastData.name}>Bob Smith</Text>
          </View>
          <View style={pastData.main}>
            {/* <BloodSugarGraph /> */}
          </View>
        </View>
        <View style={pastData.content}>
          <View style={pastData.wrapper}>
            <View style={pastData.content1}>
              <Text>Graph 1</Text>
            </View>
            <View style={pastData.content2}>
              <Text>Graph 2</Text>
            </View>
          </View>
          <View style={pastData.wrapper}>
            <View style={pastData.content2}>
              <Text>Graph 3</Text>
            </View>
            <View style={pastData.content2}>
              <Text>Graph 4</Text>
            </View>
          </View>
          <View style={pastData.spacer} />
        </View>
      </View>
    </>
  );
}