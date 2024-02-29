import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import AxiosInstance from './data/AxiosInstance';
import {Appcontext} from './Appcontext';

const Personal_Details = props => {
  const {navigation} = props;
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showrePassword, setShowrePassword] = useState(false);
  const {account, setAccount} = useContext(Appcontext);
  const {userdata, setUserdata} = useContext(Appcontext);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowrePassword = () => {
    setShowrePassword(!showrePassword);
  };

  const goback = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    //name là tên
    setName(userdata.name);
    //Name là email
    setEmail(userdata.Name);
  }, [account]);

  const update = async () => {
    try {
      const body = {
        email: email,
        name: Name,
        password: password,
      };
      const response = await AxiosInstance().post(`users/update-profile`, body);
      setUserdata({...userdata, name: Name});
      console.log(response);
      Alert.alert('Thông báo', 'Thành công');
      return response;
    } catch (error) {
      console.log(error);
      Alert.alert('Lỗi', 'Có lỗi');
    }
  };
  const check = () => {
    if (
      !Name ||
      Name.length < 1 ||
      !email ||
      email.length < 5 ||
      !password ||
      password.length < 1 ||
      !retypePassword ||
      retypePassword.length < 1
    ) {
      console.log(Name, email, password, retypePassword);
      Alert.alert('Lỗi', 'Không bỏ trống');
      return;
    } else if (retypePassword !== password) {
      Alert.alert('Lỗi', '2 mật khẩu không khớp');
      return;
    } else if (password != userdata.password) {
      Alert.alert('Lỗi', 'Sai mật khẩu');
      return;
    } else {
      update();
    }

    return;
  };
  return (
    <View style={mystyle.body}>
      <View style={mystyle.head}>
        <View style={mystyle.task}>
          <TouchableOpacity onPress={goback}>
            <Image
              style={mystyle.arrowleft}
              source={require('../assets/img/arrowleft.png')}
            />
          </TouchableOpacity>
          <Text style={mystyle.textsetting}>Setting</Text>
        </View>

        <Image
          style={mystyle.avt}
          source={require('../assets/img/Intersect.png')}
        />

        <TextInput
          style={mystyle.input}
          placeholder="Name"
          placeholderTextColor="#828282"
          onChangeText={text => setName(text)}
          value={Name}></TextInput>

        <TextInput
          style={mystyle.input}
          placeholder="Email"
          placeholderTextColor="#828282"
          onChangeText={text => setEmail(text)}
          value={email}
          editable={false}></TextInput>

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

        <TouchableOpacity onPress={check} style={mystyle.button1}>
          <Text style={mystyle.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Personal_Details;
const mystyle = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#0C0F14',
  },
  head: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '5%',
  },
  task: {
    marginTop: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  arrowleft: {
    width: 40,
    height: 40,
  },
  textsetting: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 36,
    right: '50%',
  },
  avt: {
    width: 153,
    height: 153,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '15%',
  },
  input: {
    color: 'white',
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 20,
    borderColor: '#252A32',
    padding: 10,
    height: 48,
  },

  iconContainer: {
    width: '100%',
    marginBottom: 10,
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
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});
