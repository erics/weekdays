/* @flow */
import React, { Component } from 'react';
import DayItems from './src/day-item';
import Moment from 'moment';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class weekdays extends Component {

  days(){
    var daysItems=[];
    for (var i = 0; i < 7; i++) {
      var day=Moment().add(i,'days').format('dddd');
      daysItems.push(
        <DayItems day={day} daysUntil={i} />
      )
    }
    return daysItems;
  }

  render() {
    return (
      <View style={styles.container}>
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
