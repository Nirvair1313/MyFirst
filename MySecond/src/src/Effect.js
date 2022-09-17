import *as React from 'react';
import{View} from 'react-native';
import { NavigationContainer,useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function ProfileScreen (){
    useFocusEffect(
        React.useCallback(() =>{
            alert('Screen was focused')


            return()=>{
                alert('Screen was Unfocused')
            };
        },
       [] )
    );
    return<View/>;
}

function HomeScreen(){
    return<View/>;

}



const Tab = createBottomTabNavigator();


export default function App (){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen}/>
                <Tab.Screen name='Profile' component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
