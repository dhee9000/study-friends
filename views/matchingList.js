import React, {Component} from 'react';
import {AppRegistry, TextInput, Platform, StyleSheet, Text, View} from 'react-native';

export class MatchingList extends Component{
    
    render(){
        let name, time1, time2, univ, major, loc, year, class1;
        name = 'Nikhil Kulkarni', time1 = 1, time2= 2, univ = 'UT Dallas', major = 'CS', loc = 'ECSS', year = 'Freshman', class1 = 'CS 1336';
        return(
            <View style={styles.viewStuff}>
                <Text style={styles.textTitle}>Name: 
                <Text style={styles.textInfo}> {name}                                  </Text>
                <Text style={styles.textTitle}>Time: </Text>
                <Text style={styles.textInfo}> {time1} to {time2}</Text>
                </Text>
                <Text style={styles.textTitle}>University:
                <Text style={styles.textInfo}> {univ}                                    </Text>
                <Text style={styles.textTitle}>Location:</Text>
                <Text style={styles.textInfo}> {loc}</Text>
                </Text>
                <Text style={styles.textTitle}>Major:
                <Text style={styles.textInfo}> {major};</Text>
                <Text style={styles.textTitle}> Year: </Text>
                <Text style={styles.textInfo}> {year}</Text>
                </Text>
                <Text style={styles.textTitle}>Class:
                <Text style={styles.textInfo}> {class1}</Text>
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
    textTitle: {
        color: 'red',
        fontWeight: 'bold',
    },
    textInfo: {
        color: 'black',
    },
})