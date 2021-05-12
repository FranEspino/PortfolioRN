import {useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';

import styles from '../theme/styles';
interface Props extends DrawerScreenProps<any,any>{} 

//interface Props extends StackScreenProps<any,any>{}

const Home = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
        //headerLeft para agregar el elemento en la parte izquierda del toolbar
        headerLeft: () => (
            <Button
                title= "Menu"
                onPress= {()=> navigation.toggleDrawer()}
            />
        )
    })
}, [])
  return (
    <View style={styles.containerScreen}>
      <Text style={styles.textWelcome}>
        Hello I'm Fran Espino, Welcome to my portfolio in React Native
      </Text>
      <View style={styles.containerButtons}>
            <TouchableOpacity 
              onPress={()=> navigation.navigate('About', 
              {nombre: 'Fran Espino',profesion: 'Frontend Developer', edad: 21}
              )}
              style={styles.btn_link}>
                <Text style={styles.textButton}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=> navigation.navigate('Projects')}
              style={styles.btn_link}>
                <Text style={styles.textButton}>Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=> navigation.navigate('Contact')}
              style={styles.btn_link}>
                <Text style={styles.textButton}>Contact</Text>
            </TouchableOpacity>
           
      </View>
    </View>
  );
};

export default Home;
