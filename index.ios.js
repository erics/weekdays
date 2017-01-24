/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import DayItems from './src/day-item';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


var DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export default class weekdays extends Component {

  days(){
    return DAYS.map(function(day){
      return <DayItems day={day}/>
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
      Days of the week:
        </Text>
        {this.days()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('weekdays', () => weekdays);
