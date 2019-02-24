import React, { Component } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import styles from "../../styles/Styles";

export class LoginForm extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <View>
          <TextInput style={styles.textInput}></TextInput>
          <TextInput style={styles.textInput}></TextInput>
      </View>
    );
  }
}
