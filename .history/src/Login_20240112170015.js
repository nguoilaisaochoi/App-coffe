import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={mystyle.body}>
      <View style={mystyle.head}>
        <Image
          source={require('../assets/img/logo.png')}
          style={mystyle.logo}></Image>
        <Text style={mystyle.welcome}>Welcome to Lungo !!</Text>
        <Text></Text>
      </View>
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
  head: {
    width: '100%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  logo: {
    margin: 'auto',
  },
  welcome: {
    color: '#FFF',
    fontSize:16,
    fontFamily: 'Poppins-Medium',
    fontWeight:'700',
    letterSpacing:0.5,
  },

});
