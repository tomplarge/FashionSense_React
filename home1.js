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

import Dimensions from 'Dimensions'
import Icon from "react-native-vector-icons/MaterialIcons"
import {CustomSegmentedControl} from 'react-native-custom-segmented-control'
import ForMe from './forMe';
import GridView from "react-native-easy-grid-view";

var ds = new GridView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var img_per_row = 2;

const wdbg_img = require('./wardrobe.jpg')
const { render } = ForMe;
const s = require("./styles")

const {height,width} = Dimensions.get('window');
const mag = require("./magnifying-glass-icon.png")

export default class Home1 extends Component{
  constructor(props){
    super(props)
    this.state = {
      segTab: 0,
      forMedataSource: ds.cloneWithCells([
          {
              text: 4,
          }
          , {
              text: 2,
              image: wdbg_img,

          }, {
              text: 3,
              backgroundColor:'#00f'

          }, {
              text: 4,
              backgroundColor:'#f0f'

          }, {
              text: 5,
              backgroundColor:'#fff'

          }, {
              text: 6,
              backgroundColor:'#000'

          }, {
              text: 7,
              backgroundColor:'#000'

          },
        ], 1),
        featureddataSource: ds.cloneWithCells([
            {
                text: 4,
            }
            , {
                text: 2,
                image: wdbg_img,

            }, {
                text: 3,
                backgroundColor:'#aaa'

            }, {
                text: 4,
                backgroundColor:'#b4b'

            }, {
                text: 5,
                backgroundColor:'#294'

            }, {
                text: 6,
                backgroundColor:'#47c'

            }, {
                text: 7,
                backgroundColor:'#000'

            },
          ], img_per_row),
      cellWidth: 0,
      cellHeight: 0
    };
  }

  renderCell(cell) {
      return <View onLayout={event => {
        var width = event.nativeEvent.layout.width;
        if(this.state.cellWidth!=width){
          this.setState({cellWidth:width})
        }
        if(this.state.cellHeight!=width){
          this.setState({cellHeight:width})
        }
      }}>
          <View style={{width:this.state.cellWidth,height:this.state.cellHeight,justifyContent:'center',backgroundColor:cell.backgroundColor}}
                 resizeMode={Image.resizeMode.stretch}>
            <Image style = {{width: this.state.cellWidth, height:this.state.cellHeight}} source={cell.image}/>
          </View>
      </View>
  }

  renderListView() {
    if (this.state.segTab == 0){
      return(
        <View style = {{width: width, height: height-70,top:50}}>
          <GridView dataSource={this.state.forMedataSource}
                    spacing={8}
                    style={{padding:0}}
                    renderCell={this.renderCell.bind(this)}

          />
        </View>
      )
    }
    else if (this.state.segTab == 1){
      return(
        <View style = {{width: width, height: height-70,top:50}}>
          <GridView dataSource={this.state.featureddataSource}
                    spacing={8}
                    style={{padding:0}}
                    renderCell={this.renderCell.bind(this)}

          />
        </View>
      )
    }
  }

  render(){
    return(
      <View style={{flex: 1,flexDirection: 'column',alignItems:'center'}}>
        <View style = {{width: width, borderWidth: 5, borderColor: "#2380F1",height: 50, top: 30, alignSelf: 'center', backgroundColor: '#ffffff'}}>
          <Text style ={{textAlign: 'center',fontSize: 30}}> Home </Text>
          <View style = {{width: width/8.5, position:'absolute', height: 40,right:0, backgroundColor: '#000000'}}>
            <Icon.Button name="search"  size={40} padding={0}borderRadius={0} borderWidth={0} margin={0}/>
          </View>
          <View style = {{width: width/8.5, position:'absolute', height: 40,left:0, backgroundColor: '#000000'}}>
            <Icon.Button name="list"  size={40} padding={0} borderRadius={0} borderWidth={0} margin={0}/>
          </View>
        </View>
        <View style = {{width: width, height: 40,top:30}}>
          <CustomSegmentedControl
            style={{
                width: width,
                height: 40,
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
                segmentTextColor: '#2380F1',
                segmentHighlightTextColor: '#ffffff',
                selectedLineColor: '#2380F1',
                selectedLineAlign: 'bottom', // top/bottom/text
                selectedLineMode: 'text', // full/text
                selectedTextColor: '#2380F1',
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
        </View>
        <View style = {{width: width, height: height-70,top:50}}>
          <ForMe segTab = {this.state.segTab}/>
        </View>
      </View>
    );
  }
}
