import React from 'react'
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {RouteStackParams} from '../navigator/StackNavigator';


interface Props extends StackScreenProps<RouteStackParams,'About'>{}
const About = ({route,navigation}:Props) => {
    return (
        <View>
            <Text>{`I'm ${route.params.nombre}, I like to developing App for the reason I am ${route.params.profesion} I'm currently ${route.params.edad} years old.`}</Text>
        </View>
    )
}

export default About
