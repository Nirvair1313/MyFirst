import *as React from'react';
import{Text,view} from 'react-native';
import{Icons} from 'react-native-vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icons from 'react-native-vector-icons';


const HomeScreen=  ()=>{
    return(
        <view style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Home</Text>
        </view>
    );

}

const SettingsScreen = ()=>{
    return(
        <view style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>Settings</Text>
        </view>
    );
}


const Tab = createBottomTabNavigator();


export default function App(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon:({focused,color,size})=>{
                    let iconsName;

                    if (route.name ==='Home'){
                        iconsName = focused
                        ? 'ios-information-circle'
                        :'ios-information-circle-outline';
                    }  else if (route.name === 'Settings'){
                        iconsName = focused? 'ios-list-box':'ios-list';
                    }
                    return <Ionicons name="ios-options color={'red'} />

                },
                tabBarActiveTintColor:'tomato',
                tabBarInactiveTintColor:'grey',
            })}
            >
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Settings' component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>

    );
}