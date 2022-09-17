
import React, {useState} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';



 

const  App =()=>{

    return(
        <View style={styles.Container}>
<View style={styles.View1}>
            <Text style={styles.text}>1
            </Text>
            </View>
            <View style={styles.View2}>
            <Text style={styles.text}>2
            </Text>
            </View>
           
            <View style={styles.View3}>
            <Text style={styles.text}>3
            </Text>
            </View>
          
            </View>
            
        
    )
        

    
}



export default App;

const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-around",
        
        flexDirection:"column",

        
        
        
    },
    text:{
        
        fontSize:27,
        textTransform:"capitalize",
        borderWidth:1,
        borderRadius:3,
        justifyContent:"center",
        
        
        alignItems:'center',
    },
View1:{
    
    
    width:100,
    height:100,
    backgroundColor:"yellow",
    justifyContent:"center"
    
},
View2:{
    
    
    
    
    width:100,
    height:100,
    backgroundColor:"steelblue",
    justifyContent:"center"
    
},
View3:{
    
    
    width:100,
    height:100,
    backgroundColor:"powderblue",
    justifyContent:"center"


}
})