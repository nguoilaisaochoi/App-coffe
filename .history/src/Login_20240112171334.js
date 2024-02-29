import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={mystyle.body}>
      <View style={mystyle.head}>
        <Image
          source={require('../assets/img/logo.png')}
          style={mystyle.logo}></Image>
        <Text style={mystyle.welcome}>Welcome to Lungo !!</Text>
        <Text style={mystyle.welcome2}>Login to Continue</Text>
        <TextInput style={mystyle.input} placeholder="Emall Address" />
      </View>
    </View>
  );
};

export default Login;
const mystyle = StyleSheet.create({
  body: {
    padding:10,
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
    backgroundColor: 'green',
  },
  logo: {
    margin: 'auto',
  },
  welcome: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  welcome2: {
    color: '#828282',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  input: {
    
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#252A32',
  },
});
