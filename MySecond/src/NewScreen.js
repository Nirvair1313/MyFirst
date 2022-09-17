import React from 'react';
import {Text,View,StyleSheet} from 'react-native';




  const NewScreen =()=>{
    return(
        <View style={styles.Container}>
        <Text style={styles.text}>
            Start App working
        </Text>

        </View>
    )
}




const styles = StyleSheet.create({
    Container:{
        
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ff8",
        tintColor:"#ff1",
        fontSize:24,
        paddingHorizontal:20,
        paddingBottom:30,

    },
    text:{
        fontSize:30,
        
    }
})