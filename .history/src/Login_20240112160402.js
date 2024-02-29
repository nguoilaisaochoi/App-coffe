import {View, Text, Image} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={mystyle.body}>
      <Image source={require('../assets/img/logo.png')}></Image>
    </View>
  );
};

export default Login;
const mystyle = StyleSheet.create({
    body
});
