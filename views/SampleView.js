import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Test } from '../components/TestComponent';

export default class Test{
    constructor(){

    }

    render(){
        return(
            <View>
                <Test version="0.0.1" ></Test>
            </View>
        )
    }
}