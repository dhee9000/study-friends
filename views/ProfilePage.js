import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Styles from '../styles/Styles';

export class ProfilePage extends Component {
    render () {
        return (
            <View style = {Styles.viewStyle}>
                <Text style = {Styles.normalText}>Profile!</Text>
            </View>
        );
    }
}

