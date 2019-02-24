import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import { Button } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

export class Profile extends Component { 
  render(){
    var data = [["UTD", "UTA", "UT"]];
    return(
      <View style={styles.view}>
      <View>
      <Text style={styles.header}>Profile Preferences</Text>
      <Text style={styles.body}>Name:</Text>
      <TextInput style={styles.input}
            placeholder = "First Name"
            maxLength = {40}
        />
      <TextInput style={styles.input}
            placeholder = "Last Name"
            maxLength = {40}
        />
        </View>
        <View>
      <Text style={styles.body}>School:</Text>

      <DropdownMenu
          bgColor={'red'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          
          data={data}
        >
          </DropdownMenu>
      </View>
      </View>


    );
  }
}

 const styles = StyleSheet.create({
   view: {
      flex: 1,
   },
   header: {
      fontSize: 40,
      
   },
   body: {
     fontSize: 20,
   },
   input: {
    borderColor: '#000000',
   },
   view2: {
    flex: 0.5,
   }, 
 }
 )
