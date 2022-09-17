import *as React from 'react';
import{Text,View,StyleSheet} from 'react-native';


function Des  () {
    return(
        <View style={styles.Body}>
            <Text> Hello Dude </Text>
            <View style={styles.Box}></View>
        </View>
    );

}



const styles = StyleSheet.create({
    Body:{
        Box:{
            hight:10,
            width:10,
            flex:1,
            
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#f123f1",
    fontWeight:10,
        },
      
    
    },
});

export default Des;