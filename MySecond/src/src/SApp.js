import { StatusBarStyle } from "react-native/Libraries/Components/StatusBar/StatusBar";
import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App(){
    return(
        <TouchableOpacity>
        <View style={styles.Container}>
            <Text> Let Is Build Signal </Text>
        </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    Container:{
        backgroundColor:"#f15678",
        alignItems:"center",
        justifyContent:"center",
        fontStyle:"ilatlic"
        
    }
})