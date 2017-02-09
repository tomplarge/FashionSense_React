/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component,Dimensions } from 'react';
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
   Platform,
 } from 'react-native';
 import AwesomeButton from 'react-native-awesome-button';

 var ImagePicker = require('react-native-image-picker');

 // More info on all the options is below in the README...just some common use cases shown here
 var options = {
   title: 'Select Avatar',
   customButtons: [
     {name: 'fb', title: 'Choose Photo from Facebook'},
   ],
   storageOptions: {
     skipBackup: true,
     path: 'images'
   }
 };

 const button_styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: 'row',
     position: 'absolute',
     bottom:10,
     left:0,
     margin: 50,
     alignItems: 'center',
     justifyContent: 'center',
   }
 })

 const image_style = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: 'row',
     position: 'absolute',
     bottom:100,
     left:0,
     margin: 50,
     alignItems: 'center',
     justifyContent: 'center',
   }
 })

 class FashionSense_React extends Component {

   state = {
     avatarSource: null
   };

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
        avatarSource: source
      });
    }
   });
 }

   onButtonPress(){
//     if (this.state === null){
//       Alert.alert('No image to send')
//     }
//     else{
       fetch('http://ec2-54-209-250-64.compute-1.amazonaws.com/api/classification',{
         method: 'POST',
         headers: {
           'Content-Type': 'image/jpeg',
           'Accept': 'application/json',
           'Content-Disposition': 'attachments; filename=upload.jpg',
         },
         body: JSON.stringify({image: this.state.avatarSource.uri})
       })
       .then((response) => response.json())
       .then((data) => {
         Alert.alert(data.classification)
       })
     //}
   }

   render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>
        <View style={button_styles.container}>
           <AwesomeButton states={{
                            default: {
                              text: 'Sense it!',
                              onPress: this.onButtonPress.bind(this),
                              backgroundColor: '#1DCCE6',
                            }
                           }} />
        </View>
      </View>
    );
  }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF'
   },
   avatarContainer: {
     borderColor: '#9B9B9B',
     borderWidth: 1 / PixelRatio.get(),
     justifyContent: 'center',
     alignItems: 'center'
   },
   avatar: {
     borderRadius: 75,
     width: 300,
     height: 300
   }
 });

 AppRegistry.registerComponent('FashionSense_React', () => FashionSense_React)
