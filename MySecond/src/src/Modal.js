import *as React from 'react';
import{Text,View,Button,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen ({navigation}){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:15}}> This is Home screen</Text>

            <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png',}}
            style={{width:100,height:100}}/>
            
            
            <Button title='Open Modal' onPress={()=>navigation.navigate('Modal')}/>
        </View>
    );

}




function ModalScreen ({navigation}){
    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:15}}> This is Modal screen</Text>
            <Button title='Dismiss' onPress={()=>navigation.goBack()}/>
        </View>
    );

}


function DetailsScreen (){
    return(
        <View>
            <Text> Details</Text>
        </View>
    );
}


const RootStack = createNativeStackNavigator();



function App (){
    return(
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Group>
                    <RootStack.Screen name='Home' component={HomeScreen}/>
                    <RootStack.Screen name='Details' component={DetailsScreen}/>
                </RootStack.Group>
                <RootStack.Group screenOptions={{presentation:'modal'}}/>
                <RootStack.Screen name='Modal' component={ModalScreen}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}


export default App;