/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/
import React, { Component} from 'react';
import {
AppRegistry,
StyleSheet,
Text,
Button,
Alert,
View,
PixelRatio,
Image,
TouchableOpacity,
TouchableHighlight,
Platform,
ImagePickerIOS,
Navigator,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import * as firebase from "firebase";
//import Home0 from "./home0";
import Login from "./login";
import Home from "./home";
import Home0 from "./home0";
import Home1 from "./home1";
import Firebase from "./firebase";
import HomeScroll from "./homescroll";
import SignUp from "./signup";
import HomeDrawer from "./homedrawer";
import * as animationStyle from "./animation";

var s = require('./styles')

class FashionSense_React extends Component {
  constructor(props) { //added
      super(props);

      Firebase.initialise();

      this.state = {
          initialView: "Login",
          segTab: 0
      };
  };

  render() {
    return (
      <Router>
        <Scene key = 'root' hideNavBar ={false}>
          <Scene key = 'login'  component = {Login} initial = {true} hideNavBar = {true} animationStyle = {animationStyle.leftToRightStyle} direction = 'leftToRight'/>
          <Scene key = 'home' title="Home" component = {(props) => <Home1 {...props}/>} animationStyle = {animationStyle.leftToRightStyle} hideNavBar = {true} />
          <Scene key = 'signup' title = 'Sign Up'  component = {SignUp} direction = 'rightToLeft' hideNavBar = {true} animationStyle = {animationStyle.rightToLeftStyle}/>
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('FashionSense_React', () => FashionSense_React)
