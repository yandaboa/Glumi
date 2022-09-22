import { Text, View } from 'react-native';
import { style, fontStyle } from './style/style.js';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Arboria-Black': require('./assets/fonts/Arboria-Black.otf'),
    'Arboria-Bold': require('./assets/fonts/Arboria-Bold.otf'),
    'Arboria-Medium': require('./assets/fonts/Arboria-Medium.otf'),
    'Arboria-Book': require('./assets/fonts/Arboria-Book.otf'),

    'Arboria-BlackItalic': require('./assets/fonts/Arboria-BlackItalic.otf'),
    'Arboria-BoldItalic': require('./assets/fonts/Arboria-BoldItalic.otf'),
    'Arboria-MediumItalic': require('./assets/fonts/Arboria-MediumItalic.otf'),
    'Arboria-BookItalic': require('./assets/fonts/Arboria-BookItalic.otf'),
  });

  return (
    <View style={style.container}>
      <LinearGradient
        colors={['#66CC99', '#3399FF', '#CCCCFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={style.background}
      >
        <Text style={[fontStyle.boldItalic, style.title]}>{Greeting()}</Text>
        <Text style={[fontStyle.book, style.text]}>The quick Hello World this is a weird message to type but the egg or an egg jumped off the wall</Text>
      </LinearGradient>
    </View>
  );
}

function Greeting() {
  let greeting = "Good\nMorning";
  let time = new Date();
  if (time.getHours() > 18) {
    greeting = "Good\nAfternoon";
  } else if (time.getHours() > 12) {
    greeting = "Good\nEvening";
  }
  return greeting;
}

