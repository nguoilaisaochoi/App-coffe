import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { Image } from 'react-native-svg';

const Setting = () => {
  return (
    <View style={mystyle.body}>
      <View>
        <Image>
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
