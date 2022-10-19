import { useFonts } from 'expo-font';
import HomePage from './components/HomePage.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import CreateAccount from './components/CreateAccount.js';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { home } from './style/style.js';
import PastData from './components/PastData';

const Tab = createBottomTabNavigator();

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
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="HomePage" component={HomePage} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //<Login/>
    //<Logout />
    <CreateAccount />
  )
}

function homeScreen() {
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="  "
      screenOptions={{
        position: 'absolute', height: 90,
        tabBarActiveTintColor: '#e91e63', headerShown: false,
      }}>
      <Tab.Group screenOptions={{ presentation: 'modal' }}>
        <Tab.Screen name="  " component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => {
              if (!focused) {
                return <Image source={require('./assets/home.svg')} style={home.sidebarIcon} />;
              } else {
                return <Image source={require('./assets/homeFocused.svg')} style={home.sidebarIcon} />
              }
            }
          }} />
        <Tab.Screen name=" " component={PastData}
          options={{
            tabBarIcon: ({ focused }) => {
              if (!focused) {
                return <Image source={require('./assets/data.svg')} style={home.sidebarIcon} />;
              } else {
                return <Image source={require('./assets/dataFocused.svg')} style={home.sidebarIcon} />
              }
            }

          }} />
      </Tab.Group>
    </Tab.Navigator>
  </NavigationContainer>
}
