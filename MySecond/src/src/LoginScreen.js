
import React from 'react';
import {Text,View,Image,TextInput,StyleSheet,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react/cjs/react.production.min';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen';





const LoginScreen =(props)=>{
    const[username,SetUsername] = React.useState('');
    const[password,SetPassword] = React.useState('');
    
    return(
        
        <View style={styles.Image}>
        <Image 
        source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAk1BMVEX///8ArEdbuXQAgy0Aqj7c8uRRtmz4/PlUt2/n9OoAoUAAgCkApzg2n1S55coAfiWW16zU7Nvu+vPN7dkAqDuIypnN6NRkvXwArEPR7tx+xpF5xIxuwYSSzqHt9+/B586c2rI5oVZHqmJcw4Alk0SM1KV8zpik3Lg9uWgWjDkAjDMAmz2t2rgAnDJPwHcttl8MsVDphATIAAAC/UlEQVR4nO3dj1bTMBiGcbZ2ZbJCWRkSETcREf8gcv9X50A9wpZkr21ibHx+V8D3nK8hZ0DZ2wMAAAAAAAAAAPhf7AeUepao5qfjKqDx6cvUE8WyPK+m46Cm1esXqaeKYjINXOpHrXnquSJYRij1WCvDzTqP1eoi9WTBzas4qcbjKrsD/k2ktVov1mnq2UKLVWrtLLOL1n60R3C9WMvU04UVtVVm3wlppaOVjlY6WulopaOVjlY6WulopaOVjlY6WulopaOVjlZ/gFZWy9Xb4y2HHV2+y7jV5MrUi23NrKOmeL/jxxqDbXVdlyObWdHZrLnMstWH2lqqV6uiaA4zbHXjStWvVdH4Tq1htmrtz1//VkWRXavjRaxWM8+RNcxWH020vfqUWavWWap/qyazVhP3cUWrDVFbuS+ktKIVrX6ilY5WOlrpaKWjlY5WOlrpaKWjlY5WOlrpaKWjlY5WOlrpaKWjlY5WOlrpaKWjlY5WOlrpaKWjlY5WOlrpaKVL1WqI70jxteqZytdqkO/e8bX6HK3V9Dz13F34Wh30fAjdrapV6rm78LXq+xB6nsHUY3fibdVzsZytBvoiSG+r0Zd+f5LjaFUdpZ66G3+r0UH4VtXZUF9suKPVerWKzrvV2F7ye3Y7xOvCo52tHparo68n8y1DvIP+orTqqm5TTxcWrXS00tFKRysdrXS00tFKRysdrXS00tFKRysdrXS00tFKRytd1FaD/bTYLmarMvVwgUVsZe5SDxdYxFb1berhAovXynzL7LiK2Ko+ST1baLFamfom9WjBxWllFqOB/s6Cj6/Vou7q/jqza+gjdytT3h51s5qknioOZytjsjub+3K1MiWpNjlakcrC3sqUr1J/Yf8gayu2ysrWimPdztKKrXLYbmUMZ5XdViu2ymmzFWeV20YrtsrjeSu2yudZK66gXk9bsVV+T1pxWdjhdyu2apeWrdJdlVwWVO39wz9eKtkqRXtR1uVdph+RB7ff5vYTYgAAAAAAAAAAgL/lOy1dgThmjOAGAAAAAElFTkSuQmCC",}}
        style={{width:150,height:150}}/>

        
        
        <View style={styles.view}>
            
            
            <TextInput placeholder='Enter usename ' type="username" onChangeText={(text)=>SetUsername(text)}/>
            <TextInput placeholder='Password' secureTextEntry type="paswword" onChangeText={(text)=>SetPassword(text)}/>
            <Button   style={styles.Buttons}title='Login' onPress={()=>props.navigation.navigate('Home')} />
            </View>
            
        </View>
        
        
    );
    
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;







const styles = StyleSheet.create({
    Body:{
        alignItems:"center",
        justifyContent:"center",
        borderColor:"#f22789",
        fontSize:34,
        borderBottomColor:"black",


        
        
    },
    Buttons:{
        fontSize:56,
        width:200
    },
    view: {
        fontSize:34,borderRadius:1
    }

})

