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
    UIManager,
    ListView,
    AlertIOS,
} from "react-native";

import Dimensions from 'Dimensions';
import Icon from "react-native-vector-icons/MaterialIcons";
import {CustomSegmentedControl} from 'react-native-custom-segmented-control';
import HomeScroll from './homescroll';
import GridView from "react-native-easy-grid-view";
import { RNS3 } from 'react-native-aws3';
import NavigationBar from 'react-native-navbar'
import Drawer from 'react-native-drawer'

const bucket_auth = {
  keyPrefix: "uploads/",
  bucket: "your-bucket",
  region: "us-east-1",
  accessKey: "your-access-key",
  secretKey: "your-secret-key",
}


const s = require("./styles")
tags = ['Formal','Beach','Winter','Athletic','Red','Orange','Yellow','Green','Blue','Indigo','Violet','Denim','Summer','Business Casual','Dresses','Pajamas','Loungewear']
const {height,width} = Dimensions.get('window');
const mag = require("./magnifying-glass-icon.png")

export default class Home1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      segTab: 0,
      drawerOpen: false,
      drawerDisabled: true,
      drawerWidth: 0
    }
  }

  componentWillMount(){
    // for(i=0;i<tags.length;i++){
    //   request_string = ''
      try {
        //if (this.props.pressData[tags[i]] == true){
          //request_string = '?'+tags[i].toLowerCase()+'=1'
          request_string = "?garbage=0"
          fetch('http://ec2-52-202-95-251.compute-1.amazonaws.com/classified'+request_string)
           .then((response) => console.log(response))
        }
      //}
      catch(error){
      }
    //}
  }

  componentDidMount(){
      this.setState({drawerWidth: 0})
  }

  drawerFlip(){
    this.setState({drawerOpen: !this.state.drawerOpen,drawerWidth:width/2})
  }

  render(){
    const titleConfig={
      title: 'Home'
    }

    const leftButtonConfig={
      title: 'Ham',
      tintColor: '#2AEAC6',
      handler: this.drawerFlip.bind(this),
    }
    return(
      <Drawer
        type = 'overlay'
        ref={(ref) => this._drawer = ref}
        open = {this.state.drawerOpen}
        openDrawerOffest={100}
        disabled={this.state.drawerDisabled}
        tapToClose={true}
        content = {<View style = {{height: height,width: this.state.drawerWidth, backgroundColor: 'red'}}/>}
      >
        <View style={{flexDirection: 'column'}}>
          <NavigationBar title={titleConfig} leftButton = {leftButtonConfig}/>
            <CustomSegmentedControl
              style={{
                  width: width,
                  height: 30,
                  backgroundColor: 'transparent',
                  marginVertical: 8,
              }}
              textValues={['For Me','Featured'] }
              selected={0}
              segmentedStyle={{
                  selectedLineHeight: 2,
                  fontSize:20,
                  fontWeight: 'bold', // bold, italic, regular (default)
                  segmentBackgroundColor: '#ffffff',
                  segmentTextColor: '#2AEAC6',
                  segmentHighlightTextColor: '#ffffff',
                  selectedLineColor: '#2AEAC6',
                  selectedLineAlign: 'bottom', // top/bottom/text
                  selectedLineMode: 'text', // full/text
                  selectedTextColor: '#2AEAC6',
                  selectedLinePaddingWidth: 5,
              }}
              animation={{
                  duration: 0.7,
                  damping: 0.5,
                  animationType: 'default',
                  initialDampingVelocity: 0.4
              }}
              onSelectedWillChange={(event)=> {
                this.setState({
                  segTab: event.nativeEvent.selected
                })
              }}
              onSelectedDidChange={(event) => {
              }}
            />
          <View style = {{width: width}}>
            <HomeScroll segTab = {this.state.segTab} />
          </View>
        </View>
      </Drawer>
    );
  }
}
