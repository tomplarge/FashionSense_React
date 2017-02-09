'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

import Dimensions from 'Dimensions';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  },
  login_container: {
      flex: 1,
      //paddingTop: 50
  },
  login_email: { //not quite aligned, but good enough for now
    alignSelf: 'center',
    top: 122,
    width: Dimensions.get('window').width*7/10,
    height: Dimensions.get('window').height/7.8,
    //backgroundColor: 'green', //for viewing purposes
    //activeOpacity: 'blue'
  },
  login_password: {
    alignSelf: 'center',
    top: 135,
    width: Dimensions.get('window').width*7/10,
    height: Dimensions.get('window').height/7.8,
    //backgroundColor: 'red', //for viewing purposes
    //activeOpacity: 'blue'
  },
  login_login:{
    alignSelf: 'center',
    top: 210,
    width: Dimensions.get('window').width*7/10,
    backgroundColor: "#2380F1"
  },
  login_signup: {
    alignSelf: 'center',
    top: 170,
    width: Dimensions.get('window').width*7/10,
    backgroundColor: "#2380F1"
  },
  login_response: {
      textAlign: "center",
      top: 250
  },
  button: {
   flex: 1,
   flexDirection: 'row',
   position: 'absolute',
   bottom:10,
   left:0,
   margin: 50,
   alignItems: 'center',
   justifyContent: 'center',
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom:100,
    left:0,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background_image:{
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  }
});
