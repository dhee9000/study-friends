import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/Styles';

export class HomePage extends Component {
    render () {
        return (
            <View style = {Styles.viewStyle}>
                <Text style = {Styles.normalText}>Home!</Text>
            </View>
        );
    }
}