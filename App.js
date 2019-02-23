import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {matchingList} from './views/matchingList'

export default class App extends Component {
  render() {
    return (
      <View>
        <matchingList></matchingList>
      </View>
    );
  }
}