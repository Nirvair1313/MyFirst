import React from 'react';
import {Text,View,StyleSheet}from  'react-native';




const HeaderNew = (props) =>{
    return(
        <View style={styles.Con}>
<Text style={styles.title}>
    {props.title}
</Text>
        </View>
    )
}

export default HeaderNew;

const styles = StyleSheet.create({
    Con:{
        
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f3e",
        width:250,
        height:250,
        
        fontSize:25,
        elevation:10,
        borderColor:'grey',
        shadowRadius:0.10

        
        
    },
    title:{
        tintColor:"#ff3",
        fontSize:25
        
       
    }
})