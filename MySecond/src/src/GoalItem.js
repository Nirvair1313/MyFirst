import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';



const GoalItem = props =>{
    return(
        <TouchableOpacity  onPress={props.onDelete.bind(this,props.id)}>
        <View  style={styles.listItem}>
        <Text>{props.title}</Text>
        </View>
        </TouchableOpacity>
    )

}




export default GoalItem;


const styles = StyleSheet.create({
    listItem:{
        backgroundColor:"#f24",
        tintColor:"#00f221",
        fontSize:20,
        margin:10,
        marginVertical:20,
        padding:15,
        color:"#00888777",
        textAlign:"center",
        borderRadius:5,
        borderWidth:1,
    },
    item:{
        tintColor:"#65f",
        textAlign:"center",
        color:"#007",
        backgroundColor:"#421",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"#012",
        borderRadius:5,
          borderWidth:1,
    }
})