import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';

export class MatchingList extends Component{
    render(){
        return(
            <View>
            <Text style= {{
                fontWeight: 'bold',
                color: 'red',
                justifyContent: 'flex-start',
                fontSize: 24,
                }}>
                Name:
                <Text style= {{color: 'black'}}>
                    Nikhil Kulkarni
                </Text>
            </Text>
            </View>
        );
    }
};