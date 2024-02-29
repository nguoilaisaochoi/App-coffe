import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';


const Setting = () => {
  return (
    <View style={mystyle.body}>
      <View>
        <Image source={require('../a')}/>
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
    }
});
