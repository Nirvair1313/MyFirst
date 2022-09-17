import React, { Component } from 'react';
import { RootTagContext } from 'react-native';
import{Text,Button,view} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function DetailScreen (){
    return(
        <view style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>Details</Text>
        </view>
    );
}


function HomeScreen ({navigation}){
    return(
        <view style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>Home!</Text>
            <Button 
            title='Go To Home'
            onPress={()=>navigation.navigate('Details')}/>
        </view>
    );
}

function DetailsScreen ({navigation}){
    return(
        <view style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>Details!</Text>
            <Button 
            title='Go To Home'
            onPress={()=>navigation.navigate('Details')}/>
        </view>
    );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={HomeScreen}/>
            <HomeStack.Screen name='Details' component={DetailsScreen}/>
        </HomeStack.Navigator>
    );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen (){
    return(
        <SettingsStack.Navigator>
            <SettingsStack.Screen name='Settings' component={SettingsScreen}/>
            <SettingsStack.Screen name='Details' component={DetailsScreen}/>
        </SettingsStack.Navigator>
    );
}


const Tab = createBottomTabNavigator();

export default function App (){
    return(
        <NavigationContainer>
            <Tab.Screen name='Home' component={HomeStackScreen}/>
            <Tab.Screen name='Settings' component={SettingsStackScreen}/>
        </NavigationContainer>
    );
}
