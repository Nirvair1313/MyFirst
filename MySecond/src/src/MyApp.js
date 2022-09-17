
import React, {useState,Component} from 'react';
import{View,Text,StyleSheet,TextInput,Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../src/HomeScreen';
import NewAccountScreen  from '../src/NewAccountScreen';
import DetailScreen from '../src/DetailScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';





const globalScreenOption = {
    
    headerStyle:{backgroundColor:"#fe4"},
    headerTitleStyle:{color:'black'},
    headerTitleAlign:"center",
    

}









const Stack = createNativeStackNavigator();
 function App (){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={globalScreenOption}>  
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='NewAccount' component={NewAccountScreen}/>
                <Stack.Screen name='Detail' component={DetailScreen}/>
                
            
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
const styles = StyleSheet.create({
    Body:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f09s",
        FontSize:12,
        fontWeight:"bold",
        fontStyle:""
    },
    input:{
        fontSize:56,
        borderRadius:1,
    },
    text:{
        fontSize:45,
        color:"white"
    },
    input1:{
        fontSize:27,
        color:"white"
    },
    input2:{
        fontSize:25,
        color:"white"
    },
    Buttons:{
        borderRadius:10,
        width:500,
        height:500,
    },
});