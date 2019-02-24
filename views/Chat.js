import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';


export class Chat extends Component{

    render(){
        return(
             <View>
                <View style={styles.container}>
                    <Text style={styles.textBox}>
                        This is text inside the chat.js file
                        more text
                     </Text>
                </View>

                <KeyboardAvoidingView
                keyboardVerticalOffset={64}>
                <TextInput
                    placeholder = "Enter Message"
                    style={styles.chatInput}
                />
                </KeyboardAvoidingView>
                
                

            
                <TouchableOpacity style={styles.buttonContainer}>
                 <Text style={styles.buttonText}>
                     Send
                </Text>
                </TouchableOpacity>
                </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        padding : 20,
    },
    textBox: {
      fontSize: 50,
      textAlign: 'center',
      backgroundColor: '#f22232'/*Red*/,
    },
    buttonContainer: {
    width:60,
    height:40,
    justifyContent: 'center',
    alignItems:'center', 
    backgroundColor:'#b642f4',
    },
    buttonText :{
        textAlign: 'right',
    },
    chatInput :{
        marginTop:500,
        backgroundColor: '#FFFFFF',
    },
  });