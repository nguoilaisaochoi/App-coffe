import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/Login'
const App = () => {
  return (
    <View>
      <Login/>
    </View>
  )
}
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'],
};
export default App