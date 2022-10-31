import React from 'react'
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
import InputDataWrap from './InputDataWrap.js';

// import Tree from '../assets/Tree.js';

const Tab = createBottomTabNavigator();

const HomePage = () => {
  const sidebarStyle = home.sidebar;

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
        }} />
      <Tab.Screen name=" " component={PastData}
        options={{
          tabBarIcon: ({ focused }) => {
            return (<DataSVG
              state={focused.toString()}
            />)
          }
        }} />
      <Tab.Screen name="   " component={InputDataWrap}
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