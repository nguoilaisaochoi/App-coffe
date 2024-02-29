import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  showPassword,
  password,
  Button,
} from 'react-native';
import React, {useState} from 'react';
const Register = () => {
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
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

        <Text style={mystyle.welcome2}>Register to Continue</Text>

        <TextInput
          style={mystyle.input}
          placeholder="Name"
          placeholderTextColor="#828282"
        />

        <TextInput
          style={mystyle.input}
          placeholder="Emall"
          placeholderTextColor="#828282"
        />

        <View style={mystyle.iconContainer}>
          <TextInput
            placeholderTextColor="#828282"
            secureTextEntry={!showPassword}
            value={password}
            style={mystyle.inputpass}
            placeholder="Password"
            onChangeText={setPassword}></TextInput>
          <TouchableOpacity onPress={toggleShowPassword} style={mystyle.icon}>
            <Image source={require('../assets/img/eyes.png')} />
          </TouchableOpacity>
        </View>

        <View style={mystyle.iconContainer}>
          <TextInput
            placeholderTextColor="#828282"
            secureTextEntry={!showPassword}
            value={retypePassword}
            style={mystyle.inputpass}
            placeholder="Re-type password"
            onChangeText={setRetypePassword}></TextInput>
          <TouchableOpacity onPress={toggleShowPassword} style={mystyle.icon}>
            <Image source={require('../assets/img/eyes.png')} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => console.log('DK')}
          style={mystyle.button1}>
          <Text style={mystyle.buttonText}>Register</Text>
        </TouchableOpacity>

        <View style={mystyle.donacc}>
          <Text style={{color: '#828282'}}>You have an account? Click</Text>
          <Text style={{color: '#D17842'}}>Sign in</Text>
        </View>
      </View>
    </View>
  );
};

export default Register;
const mystyle = StyleSheet.create({
  body: {
    color:'white',
    padding: 10,
    width: '100%',
    height: '100%',
    backgroundColor: '#0C0F14',
  },
  head: {
    width: '100%',
    height: 812,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width:142,
    height:142,
  },
  welcome: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: '2%',
  },
  welcome2: {
    color: '#828282',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
    marginBottom: '10%',
  },
  input: {
    width: '100%',
    height:48,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#252A32',
    padding: 10,
  },
  iconContainer: {
    width: '100%',
    margin: 10,
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#252A32',
  },
  inputpass: {
    width:'85%',
    padding: 10,
    color:'white',
  },
  icon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: '3%',
  },
  button1: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#D17842',
    padding: 15,
    marginTop: '10%',
    marginBottom: '3%',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  button2: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '10%',
  },
  buttonText2: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: '28%',
  },
  donacc: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
});
