import *as React from 'react';
import{Text,View,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function DetailsScreen (){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>Details</Text>
        </View>
    );
}


function HomeScreen ({navigation}){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text> Home !</Text>
            <Button 
            title='Go To Detail'
            onPress={()=>navigation.navigate('Details') }/>
        </View>
    );
}

function SettingsScreen ({navigation}){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text> Settings !</Text>
            <Button 
            title='Go To Detail'
            onPress={()=>navigation.navigate('Details') }/>
        </View>
    );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen (){
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
              <HomeStack.Screen name='Home' component={HomeScreen}/>
              <HomeStack.Screen name='Settings' component={SettingsScreen}/>
        </SettingsStack.Navigator>
    );
}



const Tab = createBottomTabNavigator();

export default function App (){
    return(
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Settings' component={SettingsScreen}/>
        </Tab.Navigator>

        </NavigationContainer>
    );
}