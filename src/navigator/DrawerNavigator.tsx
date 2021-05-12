import React from 'react'
import {createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView} from '@react-navigation/drawer'
import StackNavigator from './StackNavigator';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import Projects from '../screens/Projects';
import About from '../screens/About';
import styles from '../theme/styles';
import { TabsNavigator } from './TabsNavigator';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
        drawerStyle={{
            backgroundColor: '#12C2A5',
          //  width: 240,
          }}
           drawerContent = {(props) => <DesignDrawer {...props} />}
        >
            <Drawer.Screen name="TabsNavigator" component={TabsNavigator} />
            <Drawer.Screen name="Projects" component={Projects} />

        </Drawer.Navigator>
    )
}

const DesignDrawer = ({navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>
        <View style={styles.containerDrawer} >
            <Image
            source={{
                uri: 'https://avatars.githubusercontent.com/u/63974005?v=4'
            }}
            style={styles.imageDrawer}
            /> 
        </View>

        <View style={styles.menuDrawer}> 

           <TouchableOpacity style={styles.menuDrawerButton}
                onPress={()=> navigation.navigate('TabsNavigator') }>
                <Text style={styles.menuDrawerText}>Menu</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuDrawerButton}
                onPress={()=> navigation.navigate('Projects') }>
                <Text style={styles.menuDrawerText}>Projects</Text>
            </TouchableOpacity>
        </View>
  </DrawerContentScrollView>  

    )
}
export default DrawerNavigator

