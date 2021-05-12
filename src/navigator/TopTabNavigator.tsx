import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Projects from '../screens/Projects';
import Contact from '../screens/Contact';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/styles';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const myIcon = <Icon name="rocket" size={30} color="#900" />;

  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
    style={{
      paddingTop: top
    }}
    //fondo de la pantalla color blanco
    sceneContainerStyle={{
      backgroundColor: 'white'
    }}
    //al presionar el toptabnavigator se pinta de mi color primario y activamos el icono
    tabBarOptions={{
      style:{
        elevation: 0,
        shadowColor: 'transparent' //para ios
      },
     
      showIcon: true,
      indicatorStyle: {
        backgroundColor: colors.primary
      }
    }}

    screenOptions={({route}) => ({
      tabBarIcon: ({color, focused}) => {
        //console.log(route.name)
        let iconName: string = '';
        switch (route.name) {
          case 'gfg':
            iconName = 'T1';
            break;
          case 'Projects':
            iconName = 'TN';
            break;
          case 'Contact':
            iconName = 'ST';
            break;
        }
        return <Text style={{color}}>{myIcon} </Text>;
      },
    })}

    >
      <Tab.Screen name="gfg" component={Projects} />
      <Tab.Screen name="Projects" component={Projects} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}