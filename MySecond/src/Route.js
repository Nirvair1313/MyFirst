import *as React from 'react';
import{Button,View,Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{Route} from '@react-navigation-native';
import { useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';


function MyText (){
    const route = useRoute();

    return <Text>{route.params.caption}</Text>;


}


function HomeScreen ({navigation:{navigate}}){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text> some Content App A</Text>

            <Button title='Go To Profile' onPress={()=>navigate('Profile',{caption:'somecaption'})}/>
        </View>
    );
}


function ProfileScreen (){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>Profile Screen</Text>
            <MyText/>
        </View>
    );
}

const Stack = createNativeStackNavigator();


function App (){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='Profile' component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;