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
          imageSource: null,
          uid: "0LS4HogwucNF5iGOOzs89hZ5LF33",
          mobile: "3176503226",
          mobileForm: "3176503226"
      };

      this.logout = this.logout.bind(this);
      this.saveMobile = this.saveMobile.bind(this);
  };


  static get defaultProps(){ //change!!!!
    return {
      title: 'Home0'
    }
  }

  async logout(){
    try{
      await firebase.auth().signout();
    }

    catch(error) {
      console.log(error)
    }
  }

  saveMobile() {

    if(this.state.uid && this.state.mobileForm) {
      Database.setUserMobile(this.state.uid,this.state.mobileForm);
      DismissKeyboard();
    }
  }
  async componentDidMount() {
    try {

      let user = await firebase.auth().currentUser;

      Database.listenUserMobile(user,uid,(mobileNumber) => {
        this.setState({
          mobile: mobileNumber,
          mobileForm: mobileNumber
        });
      });

      this.setState({
        uid:user.uid
      });
    }
    catch(error) {
      console.log(error);
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

  // render(){
  //   return(
  //     <View>
  //       <Image style = {s.background_image} source={require('./Background_White.png')}>
  //         <View>
  //           <TouchableHighlight underlayColor = {'blue'} activeOpacity = {300} style = {s.sense} onPress={this.selectPhotoTapped.bind(this)}>
  //             <View>
  //               { this.state.ImageSource === null ? null:
  //                   <Image style={s.avatar} source={this.state.ImageSource} />
  //               }
  //             </View>
  //           </TouchableHighlight>
  //         </View>
  //         <View>
  //           <TouchableHighlight underlayColor = {'blue'} activeOpacity = {300} style = {s.profile} onPress={this.selectPhotoTapped.bind(this)}>
  //             <View>
  //               { this.state.ImageSource === null ? null:
  //                   <Image style={s.avatar} source={this.state.ImageSource} />
  //               }
  //             </View>
  //           </TouchableHighlight>
  //         </View>
  //       </Image>
  //     </View>    render() {
      render(){
          return (
              <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
                  <View style={CommonStyle.container}>
                      <Text style={styles.heading}>Hello UserId: {this.state.uid}</Text>
                      <Text style={styles.heading}>Mobile Number (From Database): {this.state.mobile}</Text>
                      <View style={styles.form}>
                          <Hideo
                              //iconClass={FontAwesomeIcon}
                              iconName={"mobile"}
                              iconColor={"white"}
                              iconBackgroundColor={"#f2a59d"}
                              inputStyle={{ color: "#464949"}}
                              value={this.state.mobileForm}
                              onChangeText={(mobileForm) => this.setState({mobileForm})}
                          />
                          <Button onPress={this.saveMobile} style={CommonStyle.buttons} textStyle={{fontSize: 18}}>
                              Save
                          </Button>
                      </View>
                      <View style={styles.logout}>
                          <Button onPress={this.logout} style={CommonStyle.buttons} textStyle={{fontSize: 18}}>
                              Logout
                          </Button>
                      </View>
                  </View>
              </TouchableWithoutFeedback>
            )
      }
}
//     );
//   }
// }
