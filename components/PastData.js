import { Text, View, Image, ScrollView } from 'react-native';
import { pastData } from '../style/style.js';
import BloodSugarAnalysis from './BloodSugarAnalysis.js';
import BloodSugarGraph from './BloodSugarGraph.js';

export default () => {
  return (
    <ScrollView>
      <View style={pastData.background}></View>
      <View style={pastData.container}>
        <View style={pastData.profile}>
          <Image
            style={pastData.profilePicture}
            source={require('../assets/sprout.svg')}
          />
          <Text style={pastData.name}>Bob Smith</Text>
        </View>
        <View style={pastData.content}>
          <View style={pastData.main}>
            <BloodSugarGraph />
          </View>
          <View style={pastData.wrapper}>
            <View style={pastData.content1}>
              <Text>hello world</Text>
            </View>
            <View style={pastData.content2}>
              <Text>hello world</Text>
            </View>
          </View>
          <View style={pastData.wrapper}>
            <View style={pastData.content2}>
              <Text>hello world</Text>
            </View>
            <View style={pastData.content2}>
              <Text>hello world</Text>
            </View>
          </View>
          <View style={pastData.spacer} />
        </View>
      </View>
    </ScrollView>
  );
}