import { NavigationContainer } from '@react-navigation/native';
import React, {useState,useLayoutEffect} from 'react';

import{Text,View,StyleSheet,Image,Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';




const Register = ({navigation})=>{
    const[email,SetEmail] = React.useState("");
    const[password,SetPassword] = React.useState("");



    return(
        <SafeAreaView>
        <View style={styles.Body}>
        <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8Aw+DZ9vsAwd8Av96V3u1SzuX6/v7j+Px41upDzOWb4O/a9vvf+Py97vc7yuTv+/2K3O3q+v277vYdx+L1/f6u5/LB7PWm5fFn1OnP8fh72evI8PiG3O1q1OnU8vgFIHWRAAADTUlEQVR4nO3b4XKiMBRAYTCpUIUVWdTare37v+VibQtVQkDS5pI538/O6HAGuAGkUQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs5TtH+6wPhS+N3yY3TbWWt1Frw6+t36AJ6Xi++lN6TvA5qgn9J2pZ98J/Y5TduDHbnzzHdFnPXUPnnei2vnOMCscBNaJr747zP5NP0bPtNxp42QX1jtx6zvE5MVVYeW7xGTt5iCtD1Ops8bRaSj4RHx0Vpj7TjGgkMKZFY69c/pWmPpOMWgX6s1ynLj1YfVSph1K73fI7cLxe2HbXC+oPwuDNPmB7R6uKdT33KtvVFOYmRIXXpfKVuE9x9N2UOHC5xRqFd5zF3uMBxX6TGwK1Wr8pw96YKHHA7U9aartetyzxPbzD0vhwtu4aReOfpLYXg9thd6WS2fXNLbCRfiFvpb+3yv0NWt+r9DXiUhhYIUjF4j5FepqZRWbnj7OonDQxaPpZ44ZFA69e1oaCv/2B0ooHLgkP3WfizqLkhuprMKBd0+GZ8jdT6JSSYUD755ywzjtLtxJKqxt11aPplk6j8Kxd0wzO0onmsGkmWgGq8XUQvkrPoW2woPQwpOzwmehhXtHbyrU1+39gd4KS1eFS6mFrd9WJlFPYgsPbt76ii1nocfCaOWisL65vL2iSZJSRGEx6fXZC/XP9OUSCqNMT03UR+OXiyiMymrSuaj0yfzdMgqj6KH3QWFvntKbnocDMo7Ss2T/Wildu+1U73/vpuLNqe7rGjKCJs13q+tEVb3kvWyrhLTC6wsAtVpYV7pZF+pT7ihQaKHeR/ZNn3OheouSkAtVVURBF6rl+x+cFUp5S/qrUH9caroaNN7eVLj2WVjPmIvSvu3D+H1DsXEpVM1/o+3s2z6ImFeI3wtV1TppBl+09BPz7xiv6mvGfHAzTcXswmhXaX11O1vYt9/OT023/GboORg2UsaMydS9mEsPrM/F1J5hlElZCS2KNM/MOsvO8lLMEJ3odk3JfG+SazfjKLjCm3EUXuH19V2AhVGShV74fd6EWdieN4EWtuZNqIXNvAm28GvehFv4OW9CLry8ryfl6eHPKCTd1AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOv0HKo4/SoxJhvwAAAAASUVORK5CYII=",}}
        style={{width:200,height:200}}/>
        <View style={styles.input}>
        <TextInput style={styles.input} placeholder='Email' type="Email" value={email} onChangeText={(text)=> SetEmail(text)}/>
        <TextInput placeholder='Password' type="password" secureTextEntry value={password} onChangeText={(text)=>SetPassword(text)}/>
        <View style={{justifyContent:"space-around"}}>
        <Button title='Login'  style={styles.Buttons}onPress={()=>navigation.navigate('Home') }/>
        <Button title='Create New account' style={styles.Cre} type="outline" onPress={()=>navigation.navigate('NewAccount')}/>
        </View>

        </View>
            
        </View>
        </SafeAreaView>
    );
}
const Stack = createNativeStackNavigator();

function App (){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='RegisterScreen'>
               
                <Stack.Screen name='Register' component={RegisterScreen}/>
                <Stack.Screen name='Home' component={Homescreen}/>
                <Stack.Screen name='NewAccount' component={NewAccountScreen}/>
                
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Register;


const styles = StyleSheet.create({
    Body:{
        borderColor:"red",
        justifyContent:"center",
        alignItems:"center",
        padding:180,

        
        
        
        
        
        
        
        flex:1,
    },
        input:{
            width:100,
            height:100,
            input:{
            },
        
                Cre:{
                    justifyContent:"space-Between",
                    
                    
                    
                }
                
                
            }
            
            
            
        
        
            

        
        
        

    
})