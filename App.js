import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,} from 'react-native';

import {Chat} from './views/Chat'


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Chat>
      </Chat>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#df6726',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 20,
    backgroundColor: '#f22232',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
