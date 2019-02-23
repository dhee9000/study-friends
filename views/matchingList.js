import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';

export default class matchingList extends Component{
    render(){
        return(
            <View style = {{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
            <Text style= {{fontWeight: 'bold', color: 'red'}}>
                Name:
                <Text style= {{color: 'white'}}>
                    Nikhil Kulkarni
                </Text>
            </Text>
            <View style= {{backgroundColor: 'powderblue'}} />
            <View style= {{backgroundColor: 'powderblue'}} />
            <View style= {{backgroundColor: 'powderblue'}} />
            </View>
        );
    }
};