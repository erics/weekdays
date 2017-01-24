'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class DayItem extends Component {
  render() {
    return (
      <Text style={styles.day}>{this.props.day}</Text>
    );
  }
}

const styles = StyleSheet.create({
	day:{
		fontSize:18,
		color:'#0000FF'
	}
});


export default DayItem;