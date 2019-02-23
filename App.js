import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {MatchingList} from './views/MatchingList';

export default class App extends Component {
  render() {
    return (
      <View>
        <MatchingList></MatchingList>
      </View>
    );
  }
}