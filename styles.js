'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

import Dimensions from 'Dimensions';

module.exports = StyleSheet.create({
  login_container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 150
      //paddingTop: 50
  },
  login_input_container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/13,
  },
  login_email: { //not quite aligned, but good enough for now
    //alignSelf: 'center',
    //top: 122,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/13,
    //backgroundColor: 'green', //for viewing purposes
    //activeOpacity: 'blue'
  },
  login_password: {
    //alignSelf: 'center',
    //top: 135,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/13,
    //backgroundColor: 'red', //for viewing purposes
    //activeOpacity: 'blue'
  },
  login_button: {
    //alignSelf: 'center',
    //top: 170,
    borderWidth: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/13,
    backgroundColor: "white",
    borderRadius: 0,
  },
  login_response: {
      textAlign: "center",
  },
  background_image:{
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  }
});
