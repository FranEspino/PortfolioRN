import React from 'react'
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { HeaderBackground } from 'react-navigation-stack';
import About from '../screens/About';
import Projects from '../screens/Projects';
import Contact from '../screens/Contact';

export type RouteStackParams = {
  Home: undefined,
  About: {nombre: string, profesion: string,edad: number},
  Projects: undefined,
  Contact: undefined
}
const Stack = createStackNavigator<RouteStackParams>();
const StackNavigator = () => {
    return (
        <Stack.Navigator
         screenOptions={
           {
               headerStyle: {
                backgroundColor:'#12c2a5',
                //Quital la linea debajo del toolbar
                elevation:0, //para android
                shadowColor: 'transparent'//para iOS
               },
               cardStyle: {
                    backgroundColor: 'white'
               }
           }
         }
        >
            <Stack.Screen name="Home" options={{title:"My portfolio"}} component={Home} />
            <Stack.Screen name="About"  options={{title:"About me"}}  component={About} />
            <Stack.Screen name="Projects" options={{title:"My projects"}}  component={Projects} />
            <Stack.Screen name="Contact" options={{title:"Contact me"}} component={Contact} />

      </Stack.Navigator>
    )
}

export default StackNavigator
