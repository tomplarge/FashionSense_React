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

import * as firebase from "firebase";
import Home0 from "./home0";
import Login0 from "./login0";
import Firebase from "./firebase"

class FashionSense_React extends Component {
  constructor(props) { //added
      super(props);

      Firebase.initialise();

      this.state = {
          initialView: "Login0"
      };
  };

  renderScene(route,navigator) {
    return (<Login0 navigator={navigator} />);
  }

  render() {
    return (
      <Navigator
        initialRoute = {{title: this.state.initialView}}
        renderScene = {this.renderScene}
      />);

        //  <AwesomeButton states={{
        //                   default: {
        //                     text: 'Sense it!',
        //                     onPress: this.onButtonPress.bind(this),
        //                     backgroundColor: '#1DCCE6',
        //                   }
        //                  }} />
      //</View>

  //);
  }
}

AppRegistry.registerComponent('FashionSense_React', () => FashionSense_React)
