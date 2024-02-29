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
        <View style={mystyle.iconContainer}>
          <TextInput
            secureTextEntry={!showPassword}
            value={password}
            style={mystyle.inputpass}
            placeholder="Password"
            onChangeText={setPassword}></TextInput>
          <TouchableOpacity onPress={toggleShowPassword} style={mystyle.icon}>
            <Image source={require('../assets/img/eyes.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => console.log('Sign In')}
        style={mystyle.button1}>
        <Text style={mystyle.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Sign In')}
        style={mystyle.button2}>
        <Image
          source={require('../assets/img/icon_google.png')}
          style={mystyle.icongg}
        />
        <Text style={mystyle.buttonText2}>Sign in with Google</Text>
      </TouchableOpacity>
      <Text style={{color: '#828282'}{}}>Don’t have account? </Text>
    </View>
  );
};

export default Login;
const mystyle = StyleSheet.create({
  body: {
    padding: 10,
    width: '100%',
    height: '100%',
    backgroundColor: '#0C0F14',
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
  inputpass: {},
  iconContainer: {
    width: '100%',
    backgroundColor: 'yellow',
    margin: 10,
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#252A32',
  },
  icon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: '70%',
  },
  button1: {
    width: '100%',
    borderRadius: 20,
  },
  button1: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#D17842',
    padding: 15, // Tùy chỉnh kích thước padding cho nút
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
    justifyContent: "flex-start",
  },
  buttonText2: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    marginLeft:'28%',
  },
});
