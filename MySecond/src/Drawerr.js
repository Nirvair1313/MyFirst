import *as React from 'react';
import { useDrawerStatus } from '@react-navigation/drawer';
import{View,Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';





function HomeScreen({navigation}){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <Text>Home!</Text>
        <Button title='Go To Notification' onPress={()=>navigation.navigate('Home') }/>
        </View>
    );
}





function NotificationScreen({navigation}){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <Text>Notification!</Text>
        <Button title='Go To Home' onPress={()=>navigation.goBack()}/>
        </View>
    );
}


const Drawer = createDrawerNavigator();


export  default function App (){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'/>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Notification' component={NotificationScreen}/>
        </NavigationContainer>

    );
}