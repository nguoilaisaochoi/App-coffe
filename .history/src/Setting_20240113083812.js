import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Setting = () => {
  return (
    <View style={mystyle.body}>
      <View style={mystyle.task}>
        <Image
          style={mystyle.arrowleft}
          source={require('../assets/img/arrowleft.png')}
        />
        <Text style={mystyle.textsetting}>Setting</Text>
      </View>
    </View>
  );
};

export default Setting;
const mystyle = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#0C0F14',
  },
  task: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  arrowleft: {
    width: 40,
    height: 40,
  },
  textsetting: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: #FFF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 36px; /* 180% */
  },

});
