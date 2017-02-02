'use strict';

import React, { Component } from 'react';

import {
  // StyleSheet,
  View,
  Text,
} from 'react-native';

class DayItem extends Component {
  style(){
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }
  lineHeight(){
    return 70 - 4*this.props.daysUntil;
  }
  fontSize(){
    return 60-6*this.props.daysUntil;
  }
  color(){
    var opacity;
    if (this.props.daysUntil == '0') {
     opacity=1;
    }else{
     opacity=1/this.props.daysUntil;
    }
    console.log('opacity:'+opacity);
    return 'rgba(0,0,0,'+opacity+')';
  }
  fontWeight(){
    var weight=7-this.props.daysUntil;
    return (weight*100).toString();
  }
  render() {
    return (
      <Text style={this.style()}>{this.props.day}</Text>
    );
  }
}


// const styles = StyleSheet.create({
//   day:{
//     fontSize:18,
//     color:'#656565'
//   }
// });

export default DayItem;
