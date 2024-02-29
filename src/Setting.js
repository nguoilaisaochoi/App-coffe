import { useContext } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Appcontext } from './Appcontext';


const Setting = props => {
  const {navigation} = props;
   const {setIsLogin} = useContext(Appcontext);
  const goback = () => {
    navigation.navigate('Home');
  };
  const Person = () => {
    navigation.navigate('Person');
  };
  const Logout = () => {
    setIsLogin(false);
  };
  return (
    <View style={mystyle.body}>
      <View style={mystyle.task}>
        <TouchableOpacity onPress={goback}>
          <Image
            style={mystyle.arrowleft}
            source={require('../assets/img/arrowleft.png')}
          />
        </TouchableOpacity>
        <Text style={mystyle.textsetting}>Setting</Text>
      </View>

      <View style={mystyle.setting}>
        <View style={mystyle.bgicon}>
          <Image
            style={mystyle.icon}
            source={require('../assets/img/clock.png')}
          />
        </View>
        <Text style={mystyle.text}>History</Text>
        <Image
          style={mystyle.arrowright}
          source={require('../assets/img/Arrow_right.jpg')}
        />
      </View>

      <TouchableOpacity style={mystyle.setting} onPress={Person}>
        <View style={mystyle.bgicon}>
          <Image
            style={mystyle.icon}
            source={require('../assets/img/mdi_account.png')}
          />
        </View>
        <Text style={mystyle.text}>Personal Details</Text>
        <Image
          style={mystyle.arrowright}
          source={require('../assets/img/Arrow_right.jpg')}
        />
      </TouchableOpacity>
      <View style={mystyle.setting}>
        <View style={mystyle.bgicon}>
          <Image
            style={mystyle.icon}
            source={require('../assets/img/material-symbols_location-on.png')}
          />
        </View>
        <Text style={mystyle.text}>Address</Text>
        <Image
          style={mystyle.arrowright}
          source={require('../assets/img/Arrow_right.jpg')}
        />
      </View>
      <View style={mystyle.setting}>
        <View style={mystyle.bgicon}>
          <Image
            style={mystyle.icon}
            source={require('../assets/img/ic_sharp-payment.png')}
          />
        </View>
        <Text style={mystyle.text}>Payment Method</Text>
        <Image
          style={mystyle.arrowright}
          source={require('../assets/img/Arrow_right.jpg')}
        />
      </View>

      <View style={mystyle.setting}>
        <View style={mystyle.bgicon}>
          <Image
            style={mystyle.icon}
            source={require('../assets/img/mdi_about.png')}
          />
        </View>
        <Text style={mystyle.text}>About</Text>
        <Image
          style={mystyle.arrowright}
          source={require('../assets/img/Arrow_right.jpg')}
        />
      </View>

      <View style={mystyle.setting}>
        <View style={mystyle.bgicon}>
          <Image
            style={mystyle.icon}
            source={require('../assets/img/material-symbols_help-outline-rounded.png')}
          />
        </View>
        <Text style={mystyle.text}>Help</Text>
        <Image
          style={mystyle.arrowright}
          source={require('../assets/img/Arrow_right.jpg')}
        />
      </View>

      <TouchableOpacity style={mystyle.setting} onPress={Logout}>
        <View style={mystyle.bgicon}>
          <Image
            style={mystyle.icon}
            source={require('../assets/img/ic_twotone-log-out.png')}
          />
        </View>
        <Text style={mystyle.text}>Log out</Text>
        <Image
          style={mystyle.arrowright}
          source={require('../assets/img/Arrow_right.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
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
    right: '50%',
  },
  setting: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 13,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginLeft: '10%',
    fontWeight: '500',
    letterSpacing: -0.24,
  },
  bgicon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: 'rgba(209, 120, 66, 0.20)',
  },
  icon: {
    width: 25,
    height: 25,
  },
  arrowright: {
    width: 16,
    height: 30,
    marginLeft: 'auto',
  },
});
