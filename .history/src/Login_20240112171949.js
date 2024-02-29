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
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#0C0F14',
  },
  header: {
    width: 375,
    height: 41,
    paddingLeft: 12,
    paddingRight: 12,
    left: 0,
    top: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  timeContainer: {
    paddingTop: 16,
    paddingBottom: 8,
    paddingLeft: 29.5,
    paddingRight: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'SF Pro Text',
    fontWeight: '600',
  },
  iconContainer: {
    width: 93.5,
    height: 44,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 3.2,
    height: 12,
    marginBottom: 3.4,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  welcome: {
    left: 99,
    top: 233,
    position: 'absolute',
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  login: {
    left: 129,
    top: 275,
    position: 'absolute',
    color: '#828282',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  inputContainer: {
    width: 348,
    height: 48,
    left: 14,
    top: 332,
    position: 'absolute',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#252A32',
  },
  inputLabel: {
    left: 17,
    top: 11,
    position: 'absolute',
    color: '#828282',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  forgotPassword: {
    left: 107,
    top: 681,
    position: 'absolute',
    color: '#828282',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  reset: {
    color: '#D17842',
  },
  noAccount: {
    left: 88,
    top: 639,
    position: 'absolute',
    color: '#828282',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  register: {
    color: '#D17842',
  },
  signInContainer: {
    width: 348,
    height: 212,
    left: 14,
    top: 396,
    position: 'absolute',
  },
  signInButton: {
    width: 348,
    height: 57,
    left: 0,
    top: 89,
    position: 'absolute',
    backgroundColor: '#D17842',
    borderRadius: 20,
  },
  signInText: {
    left: 148,
    top: 104,
    position: 'absolute',
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  googleButton: {
    width: 348,
    height: 57,
    left: 0,
    top: 155,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  googleIcon: {
    width: 15,
    height: 15,
    left: 25,
    top: 19,
    position: 'absolute',
    opacity: 0.4,
  },
  googleText: {
    left: 101,
    top: 15,
    position: 'absolute',
    color: '#121212',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  logoContainer: {
    width: 142,
    height: 142,
    left: 117,
    top: 81,
    position: 'absolute',
  },
  logo: {
    width: 142,
    height: 142,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: '#0C0F14',
  },
});