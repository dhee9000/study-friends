import React, {Component} from 'react';
<<<<<<< HEAD
import {StyleSheet, Text, View} from 'react-native';
import AppContainer from './navigators/Home'
=======
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Profile} from './views/Profile';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
>>>>>>> origin/xavier

export default class App extends Component {
  render() {
<<<<<<< HEAD
    return <AppContainer />;
=======
    return (
      <View style={styles.container}>
        <Profile></Profile>
      </View>
    );
>>>>>>> origin/xavier
  }
}