import React from 'react'
import { Text, View, Image } from 'react-native';
import { home } from './../style/style.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeepHomePage from './DeepHomePage';
import PastData from './PastData';
import LogEvent from './LogEvent';
import Settings from './Settings';
import HomeSVG from '../assets/HomeSVG.js';
import DataSVG from '../assets/DataSVG.js';
import InputSVG from '../assets/InputSVG.js';
import SettingSVG from '../assets/SettingSVG.js';

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
            return (
              <HomeSVG
                state={focused.toString()}
              />
            )
          }
        }} />
      <Tab.Screen name=" " component={PastData}
        options={{
          tabBarIcon: ({ focused }) => {
            return (<DataSVG
              state={focused.toString()}
            />)
          }
        }} />
      <Tab.Screen name="   " component={LogEvent}
        options={{
          tabBarIcon: ({ focused }) => {
            return (<InputSVG
              state={focused.toString()}
            />)
          }
        }} />
      <Tab.Screen name="    " component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (<SettingSVG
              state={focused.toString()}
            />)
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