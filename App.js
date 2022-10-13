import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import HomePage from './components/HomePage.js';
import Login  from './components/Login.js';

export default () => {
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
    // <HomePage/>
    <Login/>
  );
}
