import  React from 'react';
import{View,Text,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{Button,TextInput} from 'react-native-elements';
import RegisterScreen from '../src/RegisterScreen';
import HomeScreen from '../src/HomeScreen';
import NewAccountScreen from '../src/NewAccountScreen' ;
  const globalScreenOption = {
      headerStyle:{backgroundColor:"#00B7EB"},
      headerTitleStyle:{Color:""},
      headerTintColor:"white",
      headerTitleAlign:"center",

  };

const stack = createNativeStackNavigator();
export default function App (){
    return(
        <NavigationContainer>
        <stack.Navigator screenOptions={globalScreenOption}>
        <stack.Screen name='Register' component={RegisterScreen}/>
        <stack.Screen name='Home' component={HomeScreen}/>
        <stack.Screen name='NewAccount' component={NewAccountScreen}/>
        </stack.Navigator>
        
        
        </NavigationContainer>
    );
}

const Styles = StyleSheet.create({
    body:{ 
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        backgroundColor:"#F1F370",
        
    },
});




