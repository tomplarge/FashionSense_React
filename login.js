import {
    AppRegistry,
    TextInput,
    Text,
    View,
    StyleSheet,
    dismissKeyboard,
    TouchableWithoutFeedback,
    Image,
    PixelRatio,
    Alert
} from "react-native";

import React, {Component} from "react";
import * as firebase from "firebase";
import Button from "apsl-react-native-button";
import Dimensions from 'Dimensions';
import {Kaede} from "react-native-textinput-effects";
import DismissKeyboard from "dismissKeyboard";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Home0 from "./home0"
import { Actions } from 'react-native-router-flux';

var s = require("./styles");
var bkgd = require('./modernwardrobe1.jpg')

export default class Login0 extends Component {

    constructor(props) {
      super(props);

      this.state = {
        email: "",
        password: "",
        response: ""
      };

      this.signup = this.signup.bind(this)
      this.login = this.login.bind(this)
      this.itemsRef = firebase.database().ref();
    }

    async signup() {

      DismissKeyboard();
      Actions.signup()
    }
    //   try {
    //       await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
    //       try {
    //         this.itemsRef.push({uid: "0LS4HogwucNF5iGOOzs89hZ5LF33", mobile: "3176503226"})
    //         DismissKeyboard();
    //
    //         Actions.home();
    //       }
    //
    //       catch(error){
    //         Alert.alert(error)
    //       }
    //       this.setState({
    //         response :"Account Created"
    //       })
    //   }
    //
    //   catch (error) {
    //       this.setState({
    //         response: error.toString()
    //       })
    //   }
    // }

    async login() {
      Actions.home()
      // try {
      //   await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      //   console.log("Logged In!");
      //
      //   Actions.home();
      // }
      // catch (error) {
      //   console.log(error.toString())
      // }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
                <Image style = {{height: Dimensions.get('window').height, width: Dimensions.get('window').width}} source = {bkgd}>
                  <View style={s.login_container}>
                      <Kaede
                          style={{width: Dimensions.get('window').width, margin: 10}}
                          inputStyle={{width: Dimensions.get('window').width, margin: 10}}
                          label={"Email Address"}
                          labelStyle={{color: 'white', backgroundColor:'#2AEAC6'}}
                          //iconClass={FontAwesomeIcon}
                          //iconName={"envelope"}
                          //iconColor={"#1856ba"}
                          onChangeText={(email) => this.setState({email})}
                          keyboardType="email-address"
                          autoCapitalize="none"
                          //iconBackgroundColor={'#f2a59dbe'}
                          inputStyle={{ color: 'white', backgroundColor: '#2AEAC6'}}
                      />
                      <Kaede
                          style={{width: Dimensions.get('window').width, marginBottom: 10
                          }}
                          inputStyle={{width: Dimensions.get('window').width}}
                          label={"Password"}
                          labelStyle={{color: 'white', backgroundColor:'#2AEAC6' }}
                          //iconClass={FontAwesomeIcon}
                          //iconName={"key"}
                          //iconColor={"#1856ba"}
                          onChangeText={(password) => this.setState({password})}
                          password={true}
                          autoCapitalize="none"
                          //iconBackgroundColor={'#f2a59dbe'}
                          inputStyle={{ color: 'white', backgroundColor: '#2AEAC6'}}
                      />
                    <View style = {{height: 50,width: Dimensions.get('window').width}}>
                      <Button activeOpacity={0.8} onPress={this.signup} style={s.login_button} textStyle={{ fontSize: 18, color: '#2AEAC6'}}>
                          Sign up
                      </Button>
                    </View>
                    <View style = {{shadowRadius: 20, shadowColor: 'red',height: 50,margin:10,width: Dimensions.get('window').width}}>
                      <Button activeOpacity={0.8} onPress={this.login} style={s.login_button} textStyle={{fontSize: 18,color:'#2AEAC6'}}>
                          Login
                      </Button>
                    </View>
                      <View>
                          <Text style={s.login_response}>{this.state.response}</Text>
                      </View>
                    </View>
              </Image>
            </TouchableWithoutFeedback>
        );
    }
}
