import React from 'react';
import{View,Text,StyleSheet,Button } from 'react-native';



const App =()=>{
    return(
        <View  style={styles.body}>
        <Text> Hello Word</Text>
        <View style={styles.Buttons}>
        <Button title='start'/> 
        <Button title='Reset'/>
</View>

        </View>
    )
};


const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:"center",
        fontSize:29,

    },
    Buttons:{
        justifyContent:"space-around",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:16,
        borderRadius:5

    }
})

export default App;