import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Login';
import Register from './Register';
const Stacknavlogin = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Reg" component={Register} />
    </Stack.Navigator>
  );
};

export default Stacknavlogin;
