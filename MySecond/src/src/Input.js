import React, { Component } from "react";
import {View,Text,TouchableOpacity,TextInput,StyleSheet} from 'react-native'


class Input extends Component {
    state={
        email:'',
        password:''
    
}

handleEmail = (text) => {
    this.setstate({email:text})
}

handlePassword = (text) => {
    this.setstate({password:text})
}

login = (email,pass) =>{
    alert('email:'+email+'password'+pass)
}

render(){
    return(

        <View style={styles.container}>


            <TextInput style ={styles.Input}
            underlineColorAndroid ="transparent"
            placeholder = "email"
            placeholderTextColor="#f10000"
            autoCapitalize ="none"
            onChangeText={this.handleEmail}/>
             


             <TextInput style={styles.Input}
            underlineColorAndroid ="transparent"
            placeholder= "password"
            placeholderTextColor ="#89cff0"
            autoCapitalize ="none"
            onChangeText ={this.handlePassword}/>
             
    
<TouchableOpacity style ={styles.SubmitButton}

onPress = {() => this.login(this.state.email,this.state.password)}>

    <Text style={styles.SubmitButtonText}>Submit</Text>

    </TouchableOpacity>
    </View>
    )

    }
}
    export default Input;
    const styles = StyleSheet.create({
        container:{
            paddingTop:23
        
        },

        Input:{
            marginTop:15,
            height:40,
            borderColor:'#f10252',
            height:40,
            },

            SubmitButton: {
                backgroundColor: '#f1f789',
                padding: 10,
                margin: 15,
                height: 40,
        },
        SubmitButtonText:{
            color:'white',
        }
    })


