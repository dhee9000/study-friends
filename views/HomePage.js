import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/Styles';

export class HomePage extends Component {
    render () {
        return (
            <View style = {styles.viewStyle}>
                <Text style = {styles.normalText}>Home!</Text>
            </View>
        );
    }
}