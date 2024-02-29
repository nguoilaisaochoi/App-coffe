import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import Homescreen from './Homescreen';
import Card from './Card';
import CoffeDetail from './CoffeDetail';
import BeansDetail from './BeansDetail';
import Personal_Details from './Personal_Details';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Setting from './Setting';
import Payment from './Payment';
import Fav from './Fav';
import His from './His';
import Login from './Login';
import AppNavigation from './AppNavigation';
const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Coffe" component={CoffeDetail} />
      <Stack.Screen name="Beans" component={BeansDetail} />
      <Stack.Screen name="Person" component={Personal_Details} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
};
const HomeTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen name="Home" component={Homescreen} />
      <Tab.Screen name="Card" component={Card} />
      <Tab.Screen name="Fav" component={Fav} />
      <Tab.Screen name="His" component={His} />
    </Tab.Navigator>
  );
};
export default Main;
const tabScreenOptions = ({route}) => {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    style: {height: 60},
    tabBarStyle: {height: '8%', backgroundColor: 'black', borderTopWidth: 0},
    tabBarIcon: ({focused}) => {
      if (route.name == 'Home') {
        return (
          <Image
            source={
              focused
                ? require('../assets/img/home_1.png')
                : require('../assets/img/home.png')
            }
            style={mystyle.imgnav}
          />
        );
      } else if (route.name == 'Card') {
        return (
          <Image
            source={
              focused
                ? require('../assets/img/bag_1.png')
                : require('../assets/img/bag.png')
            }
            style={mystyle.imgnav}
          />
        );
      } else if (route.name === 'Fav') {
        return (
          <Image
            source={
              focused
                ? require('../assets/img//heart_1.png')
                : require('../assets/img/heart.png')
            }
            style={mystyle.imgnav}
          />
        );
      } else if (route.name === 'His') {
        return (
          <Image
            source={
              focused
                ? require('../assets/img/notification_1.png')
                : require('../assets/img/notification.png')
            }
            style={mystyle.imgnav}
          />
        );
      }
    },
  };
};
const mystyle = StyleSheet.create({
  imgnav: {width: 25, height: 25},
});
