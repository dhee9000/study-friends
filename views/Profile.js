import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import { Button } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

export class Profile extends Component { 
  render() {
    var data = [["UTD", "UTA", "UT"]];
    var data2 = [["CS", "BMEN", "SE"]];
    var data3 = [["12", "12:30", "1"]];
    var data4 = [["SU", "Library", "Founders"]];
    return (
      <View>
      <View style={styles.view}>
        <Text style={styles.header}>Profile Preferences</Text>
        <Text style={styles.body}>Name:</Text>
        <TextInput style={styles.input}
            placeholder = "First Name"
            placeholderTextColor = "#ef73b1"
        />
        <TextInput style={styles.input}
            placeholder = "Last Name"
            placeholderTextColor = "#ef73b1"
        />
      </View>
      <View style={styles.view2}>
      <Text style={styles.body}>School:</Text>
      <View style={{flex: 1}}>
        <View/>
        <DropdownMenu
          
          style={styles.view}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          
          data={data}
        >
          </DropdownMenu>

          <Text style={styles.body}>Major:</Text>
          <DropdownMenu
          
          style={styles.view}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          
          data={data2}
        >
          </DropdownMenu>

          <Text style={styles.body}>Time:</Text>
          <DropdownMenu
          
          style={styles.view}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          
          data={data3}
        >
          </DropdownMenu>

          <Text style={styles.body}>Location:</Text>
          <DropdownMenu
          
          style={styles.view}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          
          data={data4}
        >
          </DropdownMenu>
          </View>
          </View>
          
          </View>
          
    );
  }
}

const styles = StyleSheet.create({
    view: {
        flex: 1.2,
        alignItems: 'flex-start',
    },
    header: {
        color: "green",
        fontSize: 40,
    }, 
    view2: {
        flex: 3,
    },
    body:{
        fontSize: 20,
    },
    input: {
        borderColor:  "#e273ef", 
    },

})