import { useFonts } from 'expo-font';
import HomePage from './components/HomePage.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import CreateAccount from './components/CreateAccount.js';

export default () => {
  const [fontsLoad] = useFonts({
    'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
    'Comfortaa-SemiBold': require('./assets/fonts/Comfortaa-SemiBold.ttf'),
    'Comfortaa-Medium': require('./assets/fonts/Comfortaa-Medium.ttf'),
    'Comfortaa-Regular': require('./assets/fonts/Comfortaa-Regular.ttf'),
    'Comfortaa-Light': require('./assets/fonts/Comfortaa-Light.ttf'),

    'BalooTamma2-ExtraBold': require('./assets/fonts/BalooTamma2-ExtraBold.ttf'),
    'BalooTamma2-Bold': require('./assets/fonts/BalooTamma2-Bold.ttf'),
    'BalooTamma2-SemiBold': require('./assets/fonts/BalooTamma2-SemiBold.ttf'),
    'BalooTamma2-Medium': require('./assets/fonts/BalooTamma2-Medium.ttf'),
    'BalooTamma2-Regular': require('./assets/fonts/BalooTamma2-Regular.ttf'),
  });

  console.log("app is loading or loaded depending on how you put it");

  if (!fontsLoad)
    return null;

  return (
    <HomePage />
    //<Login/>
    //<Logout />
    //<CreateAccount />
  )
}
