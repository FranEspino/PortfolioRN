import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import Home from './src/screens/Home';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import DrawerNavigator from './src/navigator/DrawerNavigator';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <StatusBar
        backgroundColor= '#00877D'
        barStyle='light-content'
        />
         <NavigationContainer>
           <DrawerNavigator/>
         </NavigationContainer>

       
    </SafeAreaView>
  )
}

export default App
