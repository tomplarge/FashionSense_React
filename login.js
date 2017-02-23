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

      try {
          await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
          try {
            this.itemsRef.push({uid: "0LS4HogwucNF5iGOOzs89hZ5LF33", mobile: "3176503226"})
            DismissKeyboard();

            Actions.home();
          }

          catch(error){
            Alert.alert(error)
          }
          this.setState({
            response :"Account Created"
          })
      }

      catch (error) {
          this.setState({
            response: error.toString()
          })
      }
    }

    async login() {

      try {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
        console.log("Logged In!");

        Actions.home();
      }
      catch (error) {
        console.log(error.toString())
      }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
                <Image style = {{height: Dimensions.get('window').height, width: Dimensions.get('window').width}} source = {bkgd}>
                  <View style={s.login_container}>
                    <View style = {s.login_input_container}>
                      <Kaede
                          style = {{backgroundColor: 'red'}}
                          label={"Email Address"}
                          labelStyle={{color: 'white', backgroundColor:'#1856ba' }}
                          //iconClass={FontAwesomeIcon}
                          //iconName={"envelope"}
                          //iconColor={"#1856ba"}
                          onChangeText={(email) => this.setState({email})}
                          keyboardType="email-address"
                          autoCapitalize="none"
                          //iconBackgroundColor={'#f2a59dbe'}
                          inputStyle={{ color: 'white', backgroundColor: '#1856ba'}}
                      />
                    </View>
                    <View style = {s.login_input_container}>
                      <Kaede
                          label={"Password"}
                          labelStyle={{color: 'white', backgroundColor:'#f2a59d' }}
                          //iconClass={FontAwesomeIcon}
                          //iconName={"key"}
                          //iconColor={"#1856ba"}
                          onChangeText={(password) => this.setState({password})}
                          password={true}
                          autoCapitalize="none"
                          //iconBackgroundColor={'#f2a59dbe'}
                          inputStyle={{ color: 'white', backgroundColor: '#f2a59d'}}
                      />
                    </View>
                    <View style = {s.login_input_container}>
                      <Button onPress={this.signup} style={s.login_button} textStyle={{fontSize: 18, color: '#1856ba'}}>
                          Sign up
                      </Button>
                    </View>
                    <View style = {s.login_input_container}>
                      <Button onPress={this.login} style={s.login_button} textStyle={{fontSize: 18,color:'#f2a59d'}}>
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
