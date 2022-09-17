import React from 'react';
import{Text,View} from 'react-native';



function app (){
    return(
        <View style={{flex:1,width:'80%',height:300, flexDirection:"row",justifyContent:"space-between", padding:10,alignItems:"stretch"}}>
        <View style={{flex:1,width:100,height:100,backgroundColor:'#00f',justifyContent:"center",alignItems:"center"}}>
<Text>1</Text>
        </View>
        <View style={{flex:2,width:100,height:100,backgroundColor:"#ff9",justifyContent:"center",alignItems:"center"}}>
<Text>2</Text>
        </View>
        <View style={{flex:3,width:100,height:100,backgroundColor:"#f09",justifyContent:"center",alignItems:'center'}}>
<Text>3</Text>
        </View>

        </View>
    )
}


export default app;