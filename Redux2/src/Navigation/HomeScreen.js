import React from "react";
import { Text, View,Button } from 'react-native'
//import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import{useNavigation} from '@react-navigation/native'


//const Stack = createNativeStackNavigator()

function HomeScreen() {
    return (
<View >
            <Text> Home Screen</Text>
            <Button   title="Screen1" onPress={()=>navigation.navigate("Main")}/>
        </View>
    )
}


export default HomeScreen;