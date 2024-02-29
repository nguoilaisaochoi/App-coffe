import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={mystyle.body}>
      <Image
        //source={require('../assets/img/logo.png')}
        style={mystyle.logo}></Image>
    </View>
  );
};

export default Login;
const mystyle = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    //backgroundColor: '#0C0F14',
  },
  logo: {
    width:50,
    height:50,
    backgroundColor:'yellow',
  },
});
