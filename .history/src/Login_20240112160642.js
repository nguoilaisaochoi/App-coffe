import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={mystyle.body}>
      <Image
        source={require('../assets/img/logo.png')}
        style={mystyle.logo}></Image>
    </View>
  );
};

export default Login;
const mystyle = StyleSheet.create({
  body: {
    widt
    background: '#0C0F14',
  },
  logo: {},
});
