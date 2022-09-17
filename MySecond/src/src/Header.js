import React from 'react';
import{Text,View,StyleSheet} from 'react-native';



const Header = props =>{
    return(
    <View style={Styles.Header}>
    <Text
    style={Styles.Headertitle}>
        {props.title}
    </Text>

    </View>
    );
};

const Styles = StyleSheet.create({
    Header:{
        width:"100%",
        height:90,
        paddingTop:32,
        backgroundColor:"#f3f",
        justifyContent:"center",
        alignItems:"center",              


    },
    Headertitle:{
        color:"black",
        fontSize:27
    }
})

export default Header;