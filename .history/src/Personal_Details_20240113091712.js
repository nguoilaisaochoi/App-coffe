import {View, Text, StyleSheet} from 'react-native';
import React from 'react'

const Personal_Details = () => {
  return (
    <View style={mystyle.body}>
      <View style={mystyle.task}>
        <Image
          style={mystyle.arrowleft}
          source={require('../assets/img/arrowleft.png')}
        />
        <Text style={mystyle.textsetting}>Setting</Text>
      </View>
    </View>
  );
}

export default Personal_Details
const mystyle = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#0C0F14',
  },
});