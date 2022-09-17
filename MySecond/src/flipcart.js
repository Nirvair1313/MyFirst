
import React,{useLayoutEffect,useState} from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductScreen from './ProductScreen'






    






const Stack = createNativeStackNavigator();



export default   function  () {
    return (
       <NavigationContainer>
    
        <Stack.Navigator>
                <Stack.Screen name='Product' component={ProductScreen} options={{headerTitleAlign:"left"}} />
    </Stack.Navigator>
    
       </NavigationContainer>
    )
}
