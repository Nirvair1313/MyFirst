import React ,{useState}from 'react';
import{Text,TextInput,View,StyleSheet,Button} from 'react-native';

const Register = props=>{
const [Email,SetEmail] = useState('');
const[Password,SetPassword] = useState('');



    return(
        <View style={styles.Con}>
        <View style={input}>
        <TextInput placeholder='Email' value='Email ' onChangeText={(value)=>SetEmail(value)}/>
        <TextInput placeholder='Password' value='Password ' onChangeText={(value)=>SetPassword(value)}/>
</View>
        </View>
    )
}








const styles = StyleSheet.create({
    Con:{
        flex:1,
        alignItems:"center",
        justifyContentL:"center"
    },
    input:{
        fontSize:25,
    }
})


export default Register;