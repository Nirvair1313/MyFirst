import React from 'react';
import {Text,View,StyleSheet} from 'react-native';






function App (){
    return(
        <View style={{justifyContent:"space-around", margin:10,
        flexDirection:"row",
        }}>
        <View style={{width:70,height:70,backgroundColor:"#f78" }}></View>
        
        <View style={{width:70,height:70,backgroundColor:"#f09"}}></View>
        <View style={{width:70,height:70,backgroundColor:"#f04"}}></View>
        <View style={{width:70,height:70,backgroundColor:"#f56790"}}></View>
        <View style={styles.lbox}>

        <View>
       </View>
</View>
</View>
    
    )
}

export default App;

const styles = StyleSheet.create({
view2:{
    justifyContent:"space-around",
    flexDirection:"row",
    marginVertical:90,
    marginLeft:-60,
    
},
lbox:{
    margin:1,
}
})