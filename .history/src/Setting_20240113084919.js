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
      <View style={mystyle.setting}>
        <View style={mystyle.bgicon}></View>
        <Text style={mystyle.text}>History</Text>
        <Image source={require('../assets/img/Arrow_right.jpg')} />
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
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 36,
  },
  setting: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
  },
});
