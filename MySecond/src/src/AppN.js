import React  from 'react';
import {View,Text,StyleSheet,} from 'react-native';
import Header from '../src/Header';
import StartGameScreen from '../src/StartGameScreen';




const Game  = ()=>{
    return(
        <View  style={Styles.Body}>
            
            <Header title="Guess Game"/>
            <StartGameScreen/>
            
        </View>
    )
}
export default Game;

const Styles = StyleSheet.create({
    Body:{
        fontSize:35,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:25,
        borderRadius:5,
        backgroundColor:"#f1f134",
    }

});



