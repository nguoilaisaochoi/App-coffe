import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,

} from 'react-native';
import React, {useState} from 'react';

const Login = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [Name, setName] = useState('');
  const [messname, setmessname] = useState('');
  const [messpass, setmesspass] = useState('');
  const [isNamVaild, setIsNamValid] = useState(true);
  const [isPassVaild, setIsPassValid] = useState(true);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleOnSumit = () => {
    let isValid = true;
    if (!Name || Name.length < 1) {
      setIsNamValid(false);
      setmessname('Emall Address null!');
      isValid = false;
    } else {
      setIsNamValid(true);
    }

    if (!password || password.length < 1) {
      setIsPassValid(false);
      setmesspass('Password null!');
      isValid = false;
       console.log(isPassVaild);
    } else {
      setIsPassValid(true);
    }
    if (isValid) {
      <Personal_Details />;
      console.log('Sign In Successful');
    }
    return isValid;
  };
  return (
    <View style={mystyle.body}>
      <View style={mystyle.head}>
        <Image
          source={require('../assets/img/logo.png')}
          style={mystyle.logo}></Image>

        <Text style={mystyle.welcome}>Welcome to Lungo !!</Text>

        <Text style={mystyle.welcome2}>Login to Continue</Text>

        <TextInput
          style={[mystyle.input, !isNamVaild && mystyle.error]}
          placeholder="Emall Address"
          placeholderTextColor="#828282"
          value={Name}
          onChangeText={text => setName(text)}
        />

        <Text style={[mystyle.output, !isNamVaild && mystyle.outputerror]}>
          {messname}
        </Text>

        <View style={mystyle.iconContainer}>
          <TextInput
            placeholderTextColor="#828282"
            secureTextEntry={!showPassword}
            value={password}
            style={[mystyle.inputpass, !isPassVaild && mystyle.passerror]}
            placeholder="Password"
            onChangeText={pass => setPassword(pass)}></TextInput>
          <TouchableOpacity onPress={toggleShowPassword} style={mystyle.icon}>
            <Image source={require('../assets/img/eyes.png')} />
          </TouchableOpacity>
        </View>

        <Text style={[mystyle.output, !isPassVaild && mystyle.outputerror]}>
          {messpass}
        </Text>

        <TouchableOpacity onPress={handleOnSumit} style={mystyle.button1}>
          <Text style={mystyle.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log('Sign In')}
          style={mystyle.button2}>
          <Image source={require('../assets/img/google.png')} />
          <Text style={mystyle.buttonText2}>Sign in with Google</Text>
        </TouchableOpacity>

        <View style={mystyle.donacc}>
          <Text style={mystyle.donaccText}>Don’t have account? Click </Text>
          <Text style={mystyle.donaccText2}>Register </Text>
        </View>

        <View style={mystyle.donacc}>
          <Text style={mystyle.donaccText}>Forget Password? Click </Text>
          <Text style={mystyle.donaccText2}> Reset </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
const mystyle = StyleSheet.create({
  body: {
    padding: 10,
    width: '100%',
    Height: '100%',
    backgroundColor: '#0C0F14',
  },
  head: {
    width: '100%',
    minHeight: 812,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    marginTop: '5%',
    width: 412,
    height: 142,
    resizeMode: 'contain',
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
    marginBottom: '10%',
  },
  input: {
    color: 'white',
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#252A32',
    padding: 10,
    height: 48,
  },
  output: {
    display: 'none',
    marginRight: 'auto',
    color: '#FB7181',
    with: '100%',
    height: 24,
  },
  outputerror: {
    display: 'flex',
  },
  error: {
    borderColor: '#FB7181',
  },
  passerror: {
    borderColor: '#FB7181',
  },
  iconContainer: {
    color: 'white',
    width: '100%',
    height: 48,
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
    height: 57,
    borderRadius: 20,
    backgroundColor: '#D17842',
    padding: 15,
    marginTop: '10%',
    marginBottom: '3%',
    display: 'flex',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button2: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 57,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '6%',
  },
  buttonText2: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '20%',
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
