import React from 'react';
import {View,StyleSheet,SafeAreaView} from 'react-native';




function App (){
    return(
        
<View style={styles.Container}>
<View style={styles.box1}></View>
<View style={styles.box2}></View>
<View style={styles.lit}>
<View style={styles.little1}></View>

<View style={styles.little2}></View>



</View>
</View>



        
        

        
        



    
    );
}


export default App;

const styles = StyleSheet.create({
    Container:{
        flex:1,
alignItems:"center",
backgroundColor:"coral",
justifyContent:"space-evenly",
        
        
        
        
    
    
    },
    lit:{
justifyContent:"space-evenly",
alignSelf:"stretch",
flexDirection:"row"
    },
    box1:{
        width:200,
        height:100,
        backgroundColor:"#763",
        alignItems:"center",
        justifyContent:"center"
    },
    box2:{
        width:200,
        height:100,
        backgroundColor:"#005",
        alignItems:"center",
        justifyContent:"center"
    },

  
  
      
        
        

little1:{
   
    
    width:80,
    height:50,
    backgroundColor:"blue",
    

},
little2:{
  

    width:80,
    height:50,
    backgroundColor:"#ff8",

}

    
    
 
    
})