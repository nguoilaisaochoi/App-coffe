import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AxiosInstance from './data/AxiosInstance';
const Register = props => {
  const {navigation} = props;
  const sign = () => {
    navigation.navigate('Login');
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showrePassword, setShowrePassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowrePassword = () => {
    setShowrePassword(!showrePassword);
  };
  const checkreg = () => {
    let isValid = true;
    if (
      !name ||
      name.length < 1 ||
      !email ||
      email.length < 1 ||
      !password ||
      password.length < 1 ||
      !password ||
      password.length < 1
    ) {
      isValid = false;
      Alert.alert('Không để trống thông tin');
      return;
    } else if (retypePassword != password) {
      Alert.alert('2 mật khẩu không khớp');
      return;
    }
    if (isValid) {
      reg();
    }
    return isValid;
  };
  const reg = async () => {
    try {
      const body = {
        email: email,
        name: name,
        password: password,
      };
      const response = await AxiosInstance().post('users/register', body);
      console.log(response);
      sign();
    } catch (error) {
      console.log(error), Alert.alert('Lỗi');
    }
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
          onChangeText={name => setName(name)}
        />

        <TextInput
          style={mystyle.input}
          placeholder="Emall"
          placeholderTextColor="#828282"
          onChangeText={text => setEmail(text)}
        />

        <View style={mystyle.iconContainer}>
          <TextInput
            placeholderTextColor="#828282"
            secureTextEntry={!showPassword}
            value={password}
            style={mystyle.inputpass}
            placeholder="Password"
            onChangeText={text => setPassword(text)}></TextInput>
          <TouchableOpacity onPress={toggleShowPassword} style={mystyle.icon}>
            <Image source={require('../assets/img/eyes.png')} />
          </TouchableOpacity>
        </View>

        <View style={mystyle.iconContainer}>
          <TextInput
            placeholderTextColor="#828282"
            secureTextEntry={!showrePassword}
            value={retypePassword}
            style={mystyle.inputpass}
            placeholder="Re-type password"
            onChangeText={text => setRetypePassword(text)}></TextInput>
          <TouchableOpacity onPress={toggleShowrePassword} style={mystyle.icon}>
            <Image source={require('../assets/img/eyes.png')} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={checkreg} style={mystyle.button1}>
          <Text style={mystyle.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={mystyle.donacc} onPress={sign}>
          <Text style={mystyle.donaccText}>You have an account? Click</Text>
          <Text style={mystyle.donaccText2}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
const mystyle = StyleSheet.create({
  body: {
    padding: 10,
    width: '100%',
    height: '100%',
    backgroundColor: '#0C0F14',
  },
  head: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 142,
    height: 142,
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
    color: 'white',
    width: '100%',
    height: 48,
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
    width: '85%',
    padding: 10,
    color: 'white',
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
  donaccText: {
    color: '#828282',
    fontSize: 16,
    fontWeight: '700',
  },
  donaccText2: {
    color: '#D17842',
    fontSize: 16,
    fontWeight: '700',
  },
});
