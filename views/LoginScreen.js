import React, {Component} from 'react';
import {Button, Text, TouchableOpacity, StyleSheet, View} from 'react-native';

import { Appbar } from 'react-native-paper';

import {Logo} from '../components/Logo';
import {LoginForm} from '../components/Login/LoginForm';

import styles from '../styles/Styles';


export class LoginScreen extends Component{
    // constructor(props){
    //     super(props);
    // }

    // componentDidMount(){
        
    // }

    // componentDidUpdate(prevProps, prevState, snapshot){

    // }

    doLogin(){
        alert("Logging In!");
    }

    render(){
        return(
            <View style={styles.container}>
            <View style={{flex: 2, justifyContent: "center", alignContent: "center"}}>
                <Logo></Logo>
                <Text style={styles.h1}>Study Friends</Text>
                <Text style={styles.h2}>Login</Text>
            </View>
                <View style={{flex: 2, alignSelf: "stretch"}}>
                    <LoginForm></LoginForm>
                </View>
                <View style={{flex: 1, justifyContent: "space-evenly", alignContent:"stretch"}}>
                <Button title="Login" style={styles.button} onPress={() => this.props.navigation.navigate('Main')}></Button>
                <Button title="Sign Up" style={styles.button}></Button>
                </View>
            </View>
        );
    }
}