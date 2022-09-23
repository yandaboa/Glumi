import { Text, View, SafeAreaView } from 'react-native';
import { style, fontStyle } from './style/style.js';
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

  if (!fontsLoad)
    return null;

  return (
    <LinearGradient
      colors={['#66CC99', '#3399FF', '#CCCCFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={style.background}
    >
      <View style={style.content}>
        <Text style={[fontStyle.book, style.text, { backgroundColor: "cyan" }]}>
            sidebar icon
        </Text>
      </View>
      <SafeAreaView style={style.container}>
        <Text numberOfLines={2} style={[fontStyle.boldItalic, style.title]}>{Greeting()}</Text>
      </SafeAreaView>
      <View style={style.mainGraph}>
        <Text style={[fontStyle.book, style.text, { backgroundColor: "yellow" }]}>
          This is the square Acetone Graph Place Holder
        </Text>
      </View>
      <View style={style.content}>
        <Text style={[fontStyle.book, style.text, { backgroundColor: "green" }]}>
          This is a summary of the data on the Acetone Graph place holder
        </Text>
      </View>
      <View style={style.content}>
        <Text style={[fontStyle.book, style.text, { backgroundColor: "blue" }]}>
          Input data div place holder
        </Text>
      </View>
      <View style={style.content}>
        <Text style={[fontStyle.book, style.text, { backgroundColor: "red" }]}>
          Potential Blood Pressure div
        </Text>
      </View>
    </LinearGradient>
  );
}

function Greeting() {
  let greeting = "Good Morning";
  let time = new Date();
  if (time.getHours() > 18) {
    greeting = "Good Afternoon";
  } else if (time.getHours() > 12) {
    greeting = "Good Evening";
  }
  return greeting;
}

