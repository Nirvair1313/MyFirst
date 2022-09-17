import *as React from 'react';
import{Text,View} from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen(){
    return(
        <View style={{ flex:1, justifyContent:'center',alignItems:'centre'}}>
        <Text> Home </Text>
        </View>


    );
}

function SettingScreen(){
    return(
        <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text> Setting </Text>
        </View>
    );
}



// const createBottomTabNavigator = ();
const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
        <Tab.Screen name="Home" components={HomeScreen}/>
        <Tab.Screen name="setting" components={SettingScreen}/>
        </Tab.Navigator>
    );
}


export default function App(){
    return(
        <NavigationContainer>
        <MyTabs/>
        </NavigationContainer>
    );
}