import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const Login = () => {
return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>9:41</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.icon}></View>
          <View style={styles.icon}></View>
          <View style={styles.icon}></View>
        </View>
      </View>
      <Text style={styles.welcome}>Welcome to Lungo !!</Text>
      <Text style={styles.login}>Login to Continue</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email Address</Text>
      </View>
      <Text style={styles.forgotPassword}>Forget Password? Click <Text style={styles.reset}>Reset</Text></Text>
      <Text style={styles.noAccount}>Don’t have account? Click <Text style={styles.register}>Register</Text></Text>
      <View style={styles.signInContainer}>
        <View style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </View>
        <View style={styles.googleButton}>
          <Image source={require('../assets/img/google.png')} style={styles.googleIcon} />
          <Text style={styles.googleText}>Sign in with Google</Text>
        </View>
      </View>
      <View style={styles.logoContainer}>
        <View style={styles.logo}></View>
      </View>
    </View>
  );
};




export default Login;
const mystyle = StyleSheet.create({
  body: {
    padding: 10,
    width: '100%',
    height: '100%',
    fontFamily: 'Poppins-Medium',
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
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  welcome2: {
    color: '#828282',
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
