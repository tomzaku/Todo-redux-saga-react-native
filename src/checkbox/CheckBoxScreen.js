/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class CheckBoxScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      checked:[0,1,0],
      title:["Ahihi","Do ngok","ahuhu"]
    }
  }
  _onPressCheck=(index)=>{
    var newCheck=this.state.checked
    newCheck[index]=!newCheck[index];
    this.setState({
      checked:newCheck
    })
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.checked.map((value,index)=>(
          <CheckBox
            key={index}
            title={this.state.title[index]}
            component={TouchableWithoutFeedback}
            onPress={()=>this._onPressCheck(index)}
            checked={value}
            checkedIcon='check-square'
            uncheckedIcon='check-square'
          />
        ))}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40
  },
});
