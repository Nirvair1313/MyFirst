import React ,{useState} from 'react';
import{Text,View,StyleSheet,TextInput} from 'react-native';

const Appn = ()=>{


const [Email,SetEmail] = React.useState('');
const[Password,SetPassword] = React.useState('');







    return(
     
        
        <View style={styles.input}>
        <TextInput style={styles.input} placeholder='Email' value={Email} onChangeText={(text)=>SetEmail(text)}/>
        <TextInput style={styles.input} placeholder='Password' value={Password} onChangeText={(text)=>SetPassword(text)}/>
</View>
        
    )
}






const styles = StyleSheet.create({
    
   
    input:{
        margin:60,
        width:'60%',
        justifyContent:"space-evenly",
        alignItems:"center",
        fontSize:25
        

    },
}) 


export default Appn;