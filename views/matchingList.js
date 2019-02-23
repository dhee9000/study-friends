import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';

export class MatchingList extends Component{
    render(){
        return(
            <View style={styles.view}>
                <Text style={styles.text}>This is Nihkil, and I'm bad at programming.</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center', 
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
    },
})