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
} from "react-native";

import React, {Component} from "react";
import * as firebase from "firebase";
import Button from "apsl-react-native-button";
import Dimensions from 'Dimensions';
import {Akira} from "react-native-textinput-effects";
import DismissKeyboard from "dismissKeyboard";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
var s = require("./styles");

export default class Login0 extends Component {

    constructor(props) {
      super(props);

      this.state = {
        email: "",
        password: "",
        response: ""
      }

      this.signup = this.signup.bind(this)
      this.login = this.login.bind(this)
    }

    async signup() {

      DismissKeyboard(); //maybe?

      try {
          await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

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

      }
      catch (error) {
        console.log(error.toString())
      }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
                <Image style = {{height: Dimensions.get('window').height, width: Dimensions.get('window').width}} source = {require('./Background_White.png')}>
                  <View style={s.login_container}>
                      <View style={s.login_email}>
                        <Akira
                            label={"Email Address"}
                            iconClass={FontAwesomeIcon}
                            iconName={"pencil"}
                            iconColor={"brown"}
                            onChangeText={(email) => this.setState({email})}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            borderColor={'#774E17'}
                            labelStyle={{ color: '#2380F1' }}
                        />
                      </View>
                      <View style={s.login_password}>
                        <Akira
                            label={"Password"}
                            iconClass={FontAwesomeIcon}
                            iconName={"key"}
                            iconColor={"brown"}
                            onChangeText={(password) => this.setState({password})}
                            password={true}
                            autoCapitalize="none"
                            borderColor={'#774E17'}
                            labelStyle={{ color: '#2380F1' }}
                        />
                      </View>
                        <Button onPress={this.signup} style={s.login_signup} textStyle={{fontSize: 18}}>
                            Sign up
                        </Button>
                        <Button onPress={this.login} style={s.login_login} textStyle={{fontSize: 18}}>
                            Login
                        </Button>
                      <View>
                          <Text style={s.login_response}>{this.state.response}</Text>
                      </View>
                    </View>
              </Image>
            </TouchableWithoutFeedback>
        );
    }
}
