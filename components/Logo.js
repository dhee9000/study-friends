import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from '../styles/Styles';

export class Logo extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity><Image source={require("../assets/img/logo.png")} style={styles.logo}></Image></TouchableOpacity>
            </View>
        );
    }
}