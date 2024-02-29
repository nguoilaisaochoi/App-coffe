import {View, TextInput, TouchableOpacity, StyleSheet,Image,Text,showPassword,password} from 'react-native';
import React,{useState} from 'react';
import {Ionicons} from '@expo/vector-icons';
const Login = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  return (
    <View style={mystyle.body}>
      <View style={mystyle.head}>
        <Image
          source={require('../assets/img/logo.png')}
          style={mystyle.logo}></Image>
        <Text style={mystyle.welcome}>Welcome to Lungo !!</Text>
        <Text style={mystyle.welcome2}>Login to Continue</Text>
        <TextInput style={mystyle.input} placeholder="Emall Address" />
        <TextInput
          secureTextEntry={!showPassword}
          value={password}
          style={mystyle.inputpass}
          placeholder="Password"
          onChangeText={setPassword}></TextInput>
        <TouchableOpacity
          onPress={toggleShowPassword}
          style={mystyle.iconContainer}>
          <Image
            source={require('../assets/img/eyes.png')}
            //style={mystyle.icon}
          />
        </TouchableOpacity>
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
    marginBottom: 10,
    borderColor: '#252A32',
  },
  inputpass: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#252A32',
  },
  iconContainer: {
    display:'contain',
    padding: 5,
    backgroundColor:'yellow',
    margin
  },
});
