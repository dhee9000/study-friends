import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export class Profile extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>Profile Preferences</Text>
        <Text style={styles.body}>Name:</Text>
        <TextInput style={styles.input}
            placeholder = "Name"
            placeholderTextColor = "#ef73b1"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        color: "red",
        fontSize: 40, 
        flex: 1,
    }, 
    body:{
        fontSize: 30,
        flex: 6,
    },
    input: {
        flex: -1,
        marginBottom: 100,
        borderColor:  "#e273ef", 
    },

})