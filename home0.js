import React, {Component} from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    Button,
    Alert,
    PixelRatio,
    TouchableOpacity,
    TouchableHighlight,
    Platform,
    ImagePickerIOS,
    Navigator,
} from "react-native";

import AwesomeButton from 'react-native-awesome-button';
var ImagePicker = require('react-native-image-picker');
var s = require("./styles")

export default class Home0 extends Component{

  constructor(props) { //added
      super(props);

      this.state = {
          imageSource: null
      };
  };

  static get defaultProps(){
    return {
      title: 'Home0'
    }
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
      skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

       if (response.didCancel) {
         console.log('User cancelled image picker');
       }
       else if (response.error) {
         console.log('ImagePicker Error: ', response.error);
       }
       else if (response.customButton) {
         console.log('User tapped custom button: ', response.customButton);
       }
       else {
         let source;

         // You can display the image using either data...
         source = { uri: 'data:image/jpeg;base64,' + response.data };

         // Or a reference to the platform specific asset location
         if (Platform.OS === 'android') {
           source = { uri: response.uri };
         } else {
           source = { uri: response.uri.replace('file://', '') };
         }

         this.setState({
           ImageSource: source
         });
       }
     });
  }

  onButtonPress() {
    //check for no image
    this.state.ImageSource === null ? Alert.alert('No image to send') :
    //make POST request
     fetch('http://ec2-54-209-250-64.compute-1.amazonaws.com/api/classification',{
        method: 'POST',
        headers: {
          'Content-Type': 'image/jpeg',
          'Accept': 'application/json',
          'Content-Disposition': 'attachments; filename=upload.jpg',
        },
        body: JSON.stringify({image: this.state.ImageSource.uri})
      })
      .then((response) => response.json())
      .then((data) => {
        Alert.alert("This piece of clothin is " + data.classification)
      })
  }

  render(){
    return(
      <View>
        <Image style = {s.background_image} source={require('./Background_White.png')}>
          <View>
            <TouchableHighlight underlayColor = {'blue'} activeOpacity = {300} style = {s.sense} onPress={this.selectPhotoTapped.bind(this)}>
              <View>
                { this.state.ImageSource === null ? null:
                    <Image style={s.avatar} source={this.state.ImageSource} />
                }
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight underlayColor = {'blue'} activeOpacity = {300} style = {s.profile} onPress={this.selectPhotoTapped.bind(this)}>
              <View>
                { this.state.ImageSource === null ? null:
                    <Image style={s.avatar} source={this.state.ImageSource} />
                }
              </View>
            </TouchableHighlight>
          </View>
        </Image>
      </View>
    );
  }
}
