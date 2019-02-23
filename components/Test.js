import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Test{
    constructor(){

    }

    render(){
        return(
            <Text>Study Friends {this.props.version}</Text>
        )
    }
}