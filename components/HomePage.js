import React from 'react'
import { Text, View, Image } from 'react-native';
import { home } from './../style/style.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeepHomePage from './DeepHomePage';
import PastData from './PastData';
import LogEvent from './LogEvent';
import Settings from './Settings';
// import Tree from '../assets/Tree.js';

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
    switch (name) {
      case "home":
        if (focused) {
          return (
            <Image
              source={require('../assets/SVG/homeFocused.svg')}
              style={home.sidebarIcon}
            />
          )
        }
        return (
          <Image
            source={require('../assets/SVG/home.svg')}
            style={home.sidebarIcon}
          />
        )
      case "data":
        if (focused) {
          return (
            <Image
              source={require('../assets/SVG/dataFocused.svg')}
              style={home.sidebarIcon}
            />
          )
        }
        return (
          <Image
            source={require('../assets/SVG/data.svg')}
            style={home.sidebarIcon}
          />
        )
      case "input":
        if (focused) {
          return (
            <Image
              source={require('../assets/SVG/inputFocused.svg')}
              style={home.sidebarIcon}
            />
          )
        }
        return (
          <Image
            source={require('../assets/SVG/input.svg')}
            style={home.sidebarIcon}
          />
        )
      case "setting":
        if (focused) {
          return (
            <Image
              source={require('../assets/SVG/settingFocused.svg')}
              style={home.sidebarIcon}
            />
          )
        }
        return (
          <Image
            source={require('../assets/SVG/setting.svg')}
            style={home.sidebarIcon}
          />
        )
    }
  }

}

export default HomePage