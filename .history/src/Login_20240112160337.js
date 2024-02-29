import {View, Text, Image} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View>
      <Image source={require('../assets/img/logo.png')}></Image>
    </View>
  );
};

export default Login;
const mystyle = StyleSheet.create({
  abc: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  img: {
    margin: 'auto',
    width: '30%',
    height: '30%',
  },
  img2: {
    width: '50%',
    height: '50%',
  },
});
