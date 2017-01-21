/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';

 import React, { Component,Dimensions } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   Button,
   Alert,
   View,
 } from 'react-native';

const viewstyle = {
position: 'absolute',
bottom:0,
left:100,
flex: 1,
backgroundColor: 'skyblue'
}

export default class FashionSense_React extends Component {
     render(){
       return (
    <View style={{flex: 1}}>
       <View style={{flex: 1, backgroundColor: 'powderblue'}}>

       </View>
       <View style={{flex: 2, backgroundColor: 'skyblue'}}>
       </View>
       <View style={{flex: 3, backgroundColor: 'steelblue'}}>
       <Text> Sense </Text>
       </View>
    </View>
       );
     }
};

 AppRegistry.registerComponent('FashionSense_React', () => FashionSense_React);
