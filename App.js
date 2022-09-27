import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { general, homescreen } from './style/style.js';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoad] = useFonts({
    'Arboria-Black': require('./assets/fonts/Arboria-Black.otf'),
    'Arboria-Bold': require('./assets/fonts/Arboria-Bold.otf'),
    'Arboria-Medium': require('./assets/fonts/Arboria-Medium.otf'),
    'Arboria-Book': require('./assets/fonts/Arboria-Book.otf'),

    'Arboria-BlackItalic': require('./assets/fonts/Arboria-BlackItalic.otf'),
    'Arboria-BoldItalic': require('./assets/fonts/Arboria-BoldItalic.otf'),
    'Arboria-MediumItalic': require('./assets/fonts/Arboria-MediumItalic.otf'),
    'Arboria-BookItalic': require('./assets/fonts/Arboria-BookItalic.otf'),
  });

  console.log("app is loading or loaded depending on how you put it");

  if (!fontsLoad)
    return null;

  return (
    homePage()
  );
}

function homePage() {
  return (
    <LinearGradient
      colors={['#66CC99', '#3399FF', '#CCCCFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={general.background}
    >
      <SafeAreaView>
        <ScrollView style={general.container}>
          <View style={homescreen.sideBar}>
            {sidebar()}
          </View>
          <SafeAreaView style={homescreen.container}>
            <Text style={general.title}>
              {greeting()}
            </Text>
          </SafeAreaView>
          <SafeAreaView style={homescreen.mainInfograph}>
            {acetoneGraph()}
          </SafeAreaView>
          <SafeAreaView style={homescreen.subContent}>
            <SafeAreaView style={homescreen.inforgraphAnalysis}>
              {acetoneGraphAnalysis()}
            </SafeAreaView>
            <SafeAreaView style={homescreen.inputData}>
              {inputData()}
            </SafeAreaView>
          </SafeAreaView>
          <View style={homescreen.bloodPressure}>
            {bloodPressureGraph()}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

function sidebar() {
  return (
    <Text style={general.text}>
      sidebar icon
    </Text>
  );
}

function acetoneGraph() {
  return (
    <Text style={general.text}>
      This is the square Acetone Graph Place Holder
    </Text>
  );
}

function acetoneGraphAnalysis() {
  let analysis = `
  This is a summary of the data on the Acetone Graph place holder
  `
  return (
    <Text style={general.text}>
      {analysis}
    </Text>
  );
}

function inputData() {
  return (
    <Text style={general.text}>
      Input data div place holder
    </Text>
  );
}

function bloodPressureGraph() {
  return (
    <Text style={general.text}>
      Potential Blood Pressure div
    </Text>
  );
}



function greeting() {
  let greeting = "Good\nMorning";
  let time = new Date();
  if (time.getHours() > 18) {
    greeting = "Good\nAfternoon";
  } else if (time.getHours() > 12) {
    greeting = "Good\nEvening";
  }
  return greeting;
}

