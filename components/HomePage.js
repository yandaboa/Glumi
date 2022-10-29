import React from 'react'
import { Easing } from 'react-native';
import { home } from './../style/style.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators } from '@react-navigation/stack';
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

  // const config = {
  //   animation: "slide",
  //   config: {
  //     duration: 200,
  //     easing: Easing.linear,
  //   }
  // }

  return (
    <Tab.Navigator
      initialRouteName="  "
      screenOptions={{
        headerShown: false,
        tabBarStyle: sidebarStyle,

      }}>
      <Tab.Screen name="  " component={DeepHomePage}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <HomeSVG
                state={focused.toString()}
              />
            )
          },
          // gesture: true,
          // gestureDirecion: "horizontal",
          // transitionSpec: {
          //   open: config,
          //   close: config,
          // },
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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
}

export default HomePage