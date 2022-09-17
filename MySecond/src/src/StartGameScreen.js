import React from 'react';
import{View,Text,StyleSheet,TextInput,Button} from 'react-native';




const StartGameScreen = () =>{
    return(
        
        <View style={styles.screen}>
        <Text>Start New Game ! 
        </Text>
        <View style={styles.screen} >
            <Text> Selected Number!</Text>
            <TextInput/>
            <View style={styles.ButtonC}>
                <Button title='Reset' color="#C34789"/>


                <Button title='Confirm' color="#F67888"/>
                
            
        </View>
        </View>
        
        </View>


        

    )

};

export default StartGameScreen;

const styles = StyleSheet.create({
    screen:{
        fontSize:45,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:25,
        borderRadius:9,
        shadowOffset:{width:0,height:2},
        padding:10,
        elevation:10,
        borderColor:"black",
        shadowRadius:0.10
        

        
    },
    ButtonC:{
        
        flexDirection:"row",
        paddingHorizontal:25,
        
        alignItems:"center",
        fontSize:30,
        justifyContent:"space-evenly",
        width:"100%",
    
    },
    
        
        
    
  
    
    
})