import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';

const Personal_Details = () => {
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
  return (
    <View style={mystyle.body}>
      <View style={mystyle.task}>
        <Image
          style={mystyle.arrowleft}
          source={require('../assets/img/arrowleft.png')}
        />
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
      />

      <TextInput
        style={mystyle.input}
        placeholder="Name"
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
          secureTextEntry={!showrePassword}
          value={retypePassword}
          style={mystyle.inputpass}
          placeholder="Re-type password"
          onChangeText={setRetypePassword}></TextInput>
        <TouchableOpacity onPress={toggleShowrePassword} style={mystyle.icon}>
          <Image source={require('../assets/img/eyes.png')} />
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
    right: '30%',
  },
  avt: {
    width: 153,
    height: 153,
    marginLeft: 'auto',
    marginRight: 'auto',
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
});
