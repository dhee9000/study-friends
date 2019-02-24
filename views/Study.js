import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native';


export class Study extends Component {
   /* onPressNow()
    {
        <Text>What class do you want to study for?</Text>
        <Text Input </Text>

    }*/
    onPressNow2
    {
        <Text>Where would you like to study? </Text>
        
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
        <Button
        onPress={onPressNow2}
        </View>
        );
    }
}