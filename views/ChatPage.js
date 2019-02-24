import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Styles from '../styles/Styles';

export class ChatPage extends Component {
    render () {
        return (
            <View style = {Styles.viewStyle}>
                <Text style = {Styles.normalText}>Chat!</Text>
            </View>
        );
    }
}