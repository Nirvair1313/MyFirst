import React,{useLayoutEffect} from "react";
import { View, Text, } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDimensions } from "@react-native-community/hooks";
import MainScreen from "./src/Navigation/MainScreen";
import HomeScreen from "./src/Navigation/HomeScreen";
import { NativeScreenNavigationContainer } from "react-native-screens";



useLayoutEffect(() => {

},[])


const Stack = createNativeStackNavigator()



function App() {
  //console.log(Dimansion)
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
