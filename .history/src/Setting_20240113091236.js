import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';


const Setting = () => {
  return (
    <View style={mystyle.body}>
      <View style={mystyle.task}>
        <Image
          style={mystyle.arrowleft}
          source={require('../assets/img/arrowleft.png')}
        />
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

      <View style={mystyle.setting}>
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
      </View>
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

      <View style={mystyle.setting}>
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
      </View>
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
    marginTop:10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    marginBottom:32,
  },
  arrowleft: {
    width: 40,
    height: 40,
  },
  textsetting: {
    color: 'white',
    marginLeft: 'auto',
    marginRight:  windowWidth * 0.02,
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 36,
  },
  setting: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10,
    marginBottom:13,
  },
  text: {
    color: 'white',
    fontSize:20,
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
