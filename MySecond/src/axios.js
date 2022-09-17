import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList,StyleSheet,TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NS from './NS'
import HomeScreen2 from './HomeScreen2';









const Stack = createNativeStackNavigator()
        
        
  export default function app() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='NS' component={NS}  />
                <Stack.Screen name='Home' component={HomeScreen2}/>
            </Stack.Navigator>
    
                </NavigationContainer>
    )
        }




const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
        
  

   
     
     
    }
})