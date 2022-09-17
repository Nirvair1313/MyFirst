import React,{useState,useLayoutEffect} from 'react';
import { Input,View,Text,StyleSheet,Button } from 'react-native'; 
import { TextInput } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlers } from 'react-native-reanimated';



const  NewAccount = ({navigation})=>{
      const[name,SetName] = React.useState('');
      const[email,SetEmail] = React.useState('');
      const[password,SetPassword] = React.useState('');
      const [number,SetNumber] = React.useState('');

const Register = ()=>{};


    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center",borderRadius:1,borderBottomWidth:1}}>
            <Text>Create New Account</Text>
            <View style={{Styles}}>
            <TextInput  title="name" value={name} placeholder="Name" onChangeText={(text)=>SetName(text)}/>
            <TextInput  title="email" value={email} placeholder="Email" onChangeText={(text)=>SetEmail(text)}/>
            <TextInput  title="password" value={password} placeholder="Password"  secureTextEntry onChangeText={(text)=>SetPassword(text)}/>
            <TextInput  title="Number" value={number} placeholder="mob-No" onChangeText={(text)=>SetNumber(text)}/>
            <Button title='Registers'  onPress={Register}/>
    
        </View>
        </View>
    );
}






const Stack = createNativeStackNavigator();

  function App (){
    return(
        <NavigationContainer >
            <Stack.Navigator initialRouteName='NewAccount' screenOptions={GlobalScreenOption}>
                <Stack.Screen name='NewAccount' component={NewAccountScreen}/>
                <Stack.Screen name='Home' component={HomeScreen}/>
                
                
            </Stack.Navigator>
        </NavigationContainer>

    );

    }
export default NewAccount;
const Styles = StyleSheet.create({
    Buttons:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        
         
         fontWeight:"bold",
    
        
            
        
        
            
        
    },
    Buttons:{
        justifyContent:"center",
        alignItems:"center",
        borderColor:"grey",
        borderRadius:5,
        
    },
    
    

})