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
import Home from "./home"
import Home0 from "./home0"
import Home1 from "./home1";
import Firebase from "./firebase"
import ForMe from "./forMe";

class FashionSense_React extends Component {
  constructor(props) { //added
      super(props);

      Firebase.initialise();

      this.state = {
          initialView: "Login"
      };
  };

  renderScene(route,navigator) {
    return (<Login navigator={navigator} />);
  }

  render() {
    return (
      <Router>
        <Scene key = 'root'>
          <Scene key = 'login' component = {Login} initial = {true} hideNavBar = {true}/>
          <Scene key = 'home' component = {Home1} hideNavBar = {true}/>
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('FashionSense_React', () => FashionSense_React)
