import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {  NavigationContainer } from '@react-navigation/native';
import iconButton from 'react-native-vector-icons/dist/lib/icon-button';




const NewStyle = {
    headerStyle:{backgroundColor:"violet"},
    headerTintColor:"yellow",
    headerTitleAlign:"center",
    

}

const DetailScreen =({navigation})=>{
    return(
        <View>
            <Text>
                Detail Screen
            </Text>
            <Button title='Go To HomeScreen'    onPress={()=>navigation.navigate('Home')}/>
        </View>
    )
}

const HomeScreen = ({naviagtion})=>{
    return(
        <View>
            <Text>
Home Screen
            </Text>
            <Button title='Detaliscreen' onPress={()=>naviagtion.navigate('Detail') }/>
        </View> 
    )
}

const Drawer = createDrawerNavigator();
export default function App (){
     return(
         <NavigationContainer>
             <Drawer.Navigator screenOptions={NewStyle}>
                 <Drawer.Screen name='Home' component={HomeScreen} 
                 />
                 <Drawer.Screen name='Detail' component={DetailScreen}/>
             </Drawer.Navigator>
         </NavigationContainer>
     )
 }



const styles = StyleSheet.create({
Container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#670"
},
text:{
    backgroundColor:"#f60",
    fontSize:25
}
})