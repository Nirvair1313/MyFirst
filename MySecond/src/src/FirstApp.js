import React, {useState} from 'react';
import{Text,View,StyleSheet,TextInput,Button} from 'react-native';
import { Avatar } from '@rneui/themed';




const App = ()=>{
    const[Name,SetName] = React.useState('');
    const[Email,SetEmail] = React.useState('');

   
return(
    <View style={styles.view}>
        <Text style={styles.text}>Enter Name {Name}</Text>
        <Text style={styles.text}>Enter Email {Email}</Text>
        <TextInput style={styles.input} placeholder='Enter Name' value={Name} onChangeText={(value)=>SetName(value)}/>
        <TextInput style={styles.input} placeholder='Enter Email' value={Email} onChangeText={(value)=>SetEmail(value)}/>
        <Button title='Submit'onPress={()=>SetEmail()}/> 
    </View>
)
}


export default App;

const styles = StyleSheet.create({
view:{
    alignItems:"center",
    justifyContent:"center"
},
text:{
    fontSize:20,
},
input:{
    borderRadius:4,
    borderWidth:1,
    width:200,
    margin:10
}
})