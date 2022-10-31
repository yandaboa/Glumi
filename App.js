import { useFonts } from 'expo-font';
import { home } from './style/style.js';
import HomePage from './components/HomePage.js';
import Login from './components/Login.js';
import CreateAccount from './components/CreateAccount.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Load from './components/Load';

const Stack = createNativeStackNavigator();

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

  console.log("loaded/loading");

  if (!fontsLoad)
    return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{ headerShown: false }} name="Loading" component={Load} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="CreateAccount" component={CreateAccount} />
        <Stack.Screen options={{ headerShown: false }} name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}