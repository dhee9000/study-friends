import React, {Component} from 'react';
import {AppRegistry, TextInput, Platform, StyleSheet, Text, View} from 'react-native';

export class MatchingList extends Component{
    render(){
        return(
            <View style={styles.viewStuff}>
                <Text style={styles.textTitle}>Name: 
                    <Text style={styles.textInfo}> Nikhil Kulkarni</Text>
                    <Text style={styles.textTitle}>Time: </Text>
                    <Text style={styles.textInfo}> 2-3 PM</Text>
                </Text>
                <Text style={styles.textTitle}>University:
                <Text style={styles.textInfo}> The University of Texas at Dallas</Text>
                </Text>
                <Text style={styles.textTitle}>Major:
                <Text style={styles.textInfo}> Computer Science</Text>
                </Text>
                <Text style={styles.textTitle}>Year:
                <Text style={styles.textInfo}> Freshman</Text>
                </Text>
                <Text style={styles.textTitle}>List of Classes:
                <Text style={styles.textInfo}> CS 1336, MATH 2414, PHYS 2325, RHET 1302</Text>
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    viewStuff: {
        flex: -1,
        alignItems: 'flex-start', 
    },
    viewImportant: {
        flex: -1,
        alignItems: 'flex-end',
    },
    textTitle: {
        color: 'red',
        fontWeight: 'bold',
    },
    textInfo: {
        color: 'black',
    },
})