import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native';


export class Study extends Component {
    onPress(){
        
    }
    render() {
        return(
            <View>
            <Text>Study</Text>
            <Text>Do you want to study now or later?</Text>
            <Button
    onPress={onPressNow}
            title="Now"
        />
        </View>
        );
    }
}