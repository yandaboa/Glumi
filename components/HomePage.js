import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import DeepHomePage from './DeepHomePage';
import PastData from './PastData';
import LogEvent from './LogEvent';
import Settings from './Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { home } from '../style/style';

const Tab = createBottomTabNavigator();

const HomePage = () => {
    const sidebarStyle = home.sidebar;

  return (  
    <Tab.Navigator
        initialRouteName="  "
        screenOptions={{ headerShown: false, tabBarStyle: sidebarStyle }}>
        <Tab.Screen name="  " component={DeepHomePage}
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
  )

  function iconFocus(focused, name) {
    let focus = '.svg';
    if (focused) {
      focus = `Focused.svg`
    }
    return <Image
      source={require(`.././assets/${name}${focus}`)}
      style={home.sidebarIcon}
    />
  }
}

export default HomePage