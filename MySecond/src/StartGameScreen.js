import React from 'react';
import{View,Text,StyleSheet,TextInput,Button} from 'react-native';




const StartGameScreen = () =>{
    return(
        
        <View style={styles.screen}>
        <Text>Start New Game ! 
        </Text>
        <View style={styles.screen} >
            <Text> Selected Number!</Text>
            <TextInput placeholder='What you type'/>
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
        fontSize:55,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:32,
        borderRadius:10,
        shadowOffset:{width:1,height:1},
        padding:10,
        elevation:10,
        borderColor:"grey",
        borderWidth:1,
        shadowRadius:0.10 ,
        
        

        
    },
    ButtonC:{
        
        flexDirection:"row",
        
        
        alignItems:"center",
        fontSize:30,
        justifyContent:"space-evenly",
        width:"100%",
    
    },
    
        
        
    
  
    
    
})