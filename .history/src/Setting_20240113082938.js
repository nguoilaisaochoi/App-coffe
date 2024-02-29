import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';


const Setting = () => {
  return (
    <View style={mystyle.body}>
      <View style={mystyle.task}>
        <Image source={require('../assets/img/arrowleft.png')} />
        <Text>Setting</Text>
      </View>
    </View>
  );
};

export default Setting;
const mystyle = StyleSheet.create({
    body:{
        width:'100%',
        height:'100%',
        padding:10,
    },
    task:{
        width:'100%',
        display:'flex',
        flexDirection:''
    }
});
