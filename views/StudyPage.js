import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Styles from '../styles/Styles';

export class StudyPage extends Component {
    render () {
        return (
            <View style = {Styles.viewStyle}>
                <Text style = {Styles.normalText}>Study!</Text>
            </View>
        );
    }
}