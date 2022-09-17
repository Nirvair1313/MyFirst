import React from 'react';
import{View,Text,StyleSheet} from 'react-native';




const ThirdScreen = ()=>{
    return(
        <View style={styles.jon}> 
        <Text style={styles.text}>      Third Screen      </Text>
        </View>
    )
}
export default ThirdScreen;


const styles = StyleSheet.create({
    jon:{
       justifyContent:"center",
       alignItems:"center",
       backgroundColor:"red",

    },
    text:{
        fontSize:25,
        alignItems:"center",
        justifyContent:"center",
        
        
        paddingVertical:24

    }
})