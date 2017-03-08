import React, {Component} from "react";
import {Text, View, Image, AlertIOS,ListView,TouchableHighlight,StyleSheet} from "react-native";
import Button from "apsl-react-native-button";
import { Actions } from 'react-native-router-flux';
import CheckBox from 'react-native-check-box'
import Dimensions from 'Dimensions'
import NavigationBar from 'react-native-navbar';

const unchecked = require('./Unchecked.png')
const numClassifications = 17
const titleConfig = {
  title: 'Sign Up',
  style: {fontSize: 20,fontWeight:'bold',color:'white'}
}
const leftButtonConfig = {
  title:'Back',
  tintColor: 'white',
  handler: () => Actions.login()
}
tags = ['Formal','Beach','Winter','Athletic','Red','Orange','Yellow','Green','Blue','Indigo','Violet','Denim','Summer','Business Casual','Dresses','Pajamas','Loungewear']
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.pressed !== r2.pressed});
    this.pressData = {};
    for (var i = 0; i < numClassifications; i++){
      this.pressData[tags[i]] = false;
    }
    this.state = {
      classifications: ds.cloneWithRows(this.genRows(this.pressData)),
    };
  }

  handlePress(row){
    this.pressData[row.text] = !this.pressData[row.text];
    //console.log(this.pressData)
    this.setState({classifications: this.state.classifications.cloneWithRows(
    this.genRows(this.pressData)
    )});

  }

  genRows(pressData){
    var dataBlob = [];
    for (var ii = 0; ii < numClassifications; ii++) {
      rowObject = {text: tags[ii], pressed:pressData[tags[ii]],id:ii}
      dataBlob.push(rowObject);
    }
    return dataBlob;
  }
  renderRow(row){
    background = this.pressData[row.text] ? '#2AEAC6' : 'white'
    return(
      <View style = {{flex:1}}>
        <TouchableHighlight style = {{backgroundColor: '#EBEBEB',borderBottomWidth: 1,height: 50}} onPress={() => this.handlePress(row)}>
          <View>
            <CheckBox
            leftText = {row.text}
            leftTextStyle = {{fontSize: 20,left: 0, fontWeight:'bold',margin:20}}
            onClick = {()=>this.handlePress(row)}
            isChecked = {row.pressData}
            />
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  donePress(){
    //console.log(this.pressData)
    Actions.home({pressData: this.pressData})
  }
  render(){
    return(
      <View  style = {{flexDirection: 'column',flex:1, backgroundColor: '#2AEAC6'}}>
      <NavigationBar containerStyle = {{backgroundColor: '#2AEAC6'}} title={titleConfig} leftButton = {leftButtonConfig}/>
        <View style={{alignSelf: 'center'}}>
          <Text style ={{fontWeight: 'bold',fontSize: 30,color:'white'}}> Choose Your Styles! </Text>
        </View>
        <ListView
          dataSource = {this.state.classifications}
          renderRow = {this.renderRow.bind(this)}
        />
        <Button onPress = {this.donePress.bind(this)} textStyle={{fontSize: 18,color:'#2AEAC6'}} style ={{bottom:0,backgroundColor:'white',borderRadius:0,borderWidth:0}}>
        Done
        </Button>
      </View>
    )
  }
}
