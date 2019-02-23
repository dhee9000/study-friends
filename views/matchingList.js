import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';

export class MatchingList extends Component{
    render(){
        return(
            <View style = {{
                flex: 1,
                flexDirection: 'column',
            }}>
            <Text style= {{
                fontWeight: 'bold',
                color: 'red',
                flex: 1,
                flexDirection: 'column',
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