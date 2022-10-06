import React, { Component } from 'react';
import { Image } from 'react-native';
import { home } from '../style/style.js';

export default class Sidebar extends Component{
  // sideClicked(){
  //   alert('button clicked')
  // }

  render(){
    return (
      <Image
        // onclick={this.sideClicked}
        style={home.sidebarIcon}
        source={require('../assets/sidebar.svg')}
      />
    );
  }
}