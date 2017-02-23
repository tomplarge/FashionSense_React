import React, {Component} from "react";
import {Text, View, Image} from "react-native";
import GridView from "react-native-easy-grid-view";


var ds = new GridView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var img_per_row = 2;
const wdbg_img = require('./wardrobe.jpg')

export default class ForMe extends Component{
    constructor(props) {
      super(props)
      this.state =  {
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

    render() {
      if (this.props.segTab == 0){
        return(
          <GridView dataSource={this.state.forMedataSource}
                    spacing={8}
                    style={{padding:0}}
                    renderCell={this.renderCell.bind(this)}

          />
        )
      }
      else if (this.props.segTab == 1){
        return(
          <GridView dataSource={this.state.featureddataSource}
                    spacing={8}
                    style={{padding:0}}
                    renderCell={this.renderCell.bind(this)}
          />
        )
      }
    }
}
