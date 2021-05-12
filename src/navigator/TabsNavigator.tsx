import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform, Text} from 'react-native';
import Tab1Screen from '../screens/Tab1Screen';
import {colors} from '../theme/styles';
import StackNavigator from './StackNavigator';
import {TopTabNavigator} from './TopTabNavigator'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
export const TabsNavigator = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabAndroid />;
};

//Configuracion para Android
const ButtomTabAndroid = createMaterialBottomTabNavigator();
const TabAndroid = () => {
  return (
    <ButtomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          //console.log(route.name)
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'TopTabNavigator':
              iconName = 'TN';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{title: 'TopN'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" component={StackNavigator} />
    </ButtomTabAndroid.Navigator>
  );
};

//Configuracion para iOS
const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopWidth: 0,
          borderTopColor: colors.primary,
          elevation: 0, //quitar la linea superiot del Menutab
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      //Configuración global que aplica a cada Tab
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          //console.log(route.name)
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen name="TopTabNavigator" component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
};
