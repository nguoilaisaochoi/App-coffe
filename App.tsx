import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import AppNavigation from './src/AppNavigation';
import { Appprovider } from './src/Appcontext';
import Payment from './src/Payment';
import Fav from './src/Fav';
import His from './src/His';
const App = () => {
  return (
    <Appprovider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
        <AppNavigation />
      </SafeAreaView>
    </Appprovider>
  );
};

export default App;
