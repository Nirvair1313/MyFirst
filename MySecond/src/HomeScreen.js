
import  React,{useLayoutEffect,useState} from 'react';
import{View, Text, Button,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';





const Login  = ({navigation}) =>{
    const[name,SetName] = React.useState('');
    const[password,SetPassword] = React.useState('');




    return(
        <View style={Styles.body}>
            <Text style={Styles.text}> Welcome Home Screen </Text>
            <View style={Styles.input}>
            <TextInput style={{borderColor:"grey",borderWidth:1,width:200,borderRadius:5}} placeholder='Name' value={name}  onChangeText={(text)=>SetName (text)}/>
            <TextInput style={{borderColor:"grey",borderWidth:1,width:200,borderRadius:5}} placeholder='Password' value={password}  secureTextEntry onChangeText={(text)=>SetPassword (text)}/>
            <TouchableOpacity>
            <Button  title='Submit' onPress={()=>navigation.navigate('NewAccount')}/>
            </TouchableOpacity>
        </View>
        </View>
        
    );

}




export default Login ;

const Stack = createNativeStackNavigator();
function App (){
    return(
        <NavigationContainer >
        <Stack.Navigator >
            <Stack.Screen name= 'Home' component={HomeScreen}  options={{title:"Login"}}/>
            <Stack.Screen name='NewAccount' component={NewAccountScreen}/>
            <Stack.Screen name='Detail' component={DetailScreen}/>
            
            </Stack.Navigator>
        </NavigationContainer>
    );
}




const Styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        fontSize:40,
        backgroundColor:"skyblue"

    },
    text:{
        fontSize:23,
        color:"magenta",
        
    },
    input:{
        fontSize:34,
        justifyContent:"space-between",
    },
    Buttons:{
        width:100,
        height:100,
    }

})