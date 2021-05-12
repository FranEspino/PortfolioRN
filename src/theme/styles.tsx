import { StyleSheet } from "react-native";
export const colors ={
    primary: '#12c2a5',
}

const styles = StyleSheet.create({
    containerScreen:{
        margin: 20,
        
    },
    textWelcome:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    textButton:{
        fontSize: 14,
        fontWeight: 'bold'
    },
    containerButtons:{
        margin: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btn_link:{
        backgroundColor: '#62ebde',
        height: 45,
        width: 80,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerDrawer:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around'
    },
    imageDrawer:{
        width: 80,
        height: 80,
        borderRadius: 100,
        marginTop: 10
    },
    menuDrawer:{
        marginVertical: 20,
        marginHorizontal: 30,
        
    },
    menuDrawerText:{
        fontSize: 20,
        color: 'black'
    },
    menuDrawerButton:{
        marginVertical: 10
    }
});

export default styles;