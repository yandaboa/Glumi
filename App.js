import { useFonts } from 'expo-font';
import HomePage from './components/HomePage.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import CreateAccount from './components/CreateAccount.js';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { home, navBar } from './style/style.js';
import PastData from './components/PastData';
import LogEvent from './components/LogEvent.js';
import Settings from './components/Settings.js';

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

  console.log("loaded/loading");

  if (!fontsLoad)
    return null;

  const sidebarStyle = home.sidebar;

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="HomePage" component={HomePage} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //<Login/>
    //<Logout />
    //<CreateAccount />
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="  "
        screenOptions={{ headerShown: false, tabBarStyle: sidebarStyle }}>
        <Tab.Screen name="  " component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => {
              return iconFocus(focused, 'home');
            }
          }} />
        <Tab.Screen name=" " component={PastData}
          options={{
            tabBarIcon: ({ focused }) => {
              return iconFocus(focused, 'data');
            }
          }} />
        <Tab.Screen name="   " component={LogEvent}
          options={{
            tabBarIcon: ({ focused }) => {
              return iconFocus(focused, 'input');
            }
          }} />
        <Tab.Screen name="    " component={Settings}
          options={{
            tabBarIcon: ({ focused }) => {
              return iconFocus(focused, 'setting');
            }
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )

  function iconFocus(focused, name) {
    let focus = '.svg';
    if (focused) {
      focus = `Focused.svg`
    }
    return <Image
      source={require(`./assets/${name}${focus}`)}
      style={home.sidebarIcon}
    />
  }
}