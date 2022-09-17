import React,{useState} from 'react';
import {Text,View,TextInput,StyleSheet} from 'react-native';





const Fill = ()=>{
   const[text,Settext] = React.useState()

    return(
        <TextInput placeholder='Type Here' style={styles.input} onChangeText={(text)=>Settext(text)} value={text}/>
    )
}


export default Fill;



const styles = StyleSheet.create({
input:{
    width:200,
    borderRadius:5,
    borderWidth:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
    margin:80
}

})