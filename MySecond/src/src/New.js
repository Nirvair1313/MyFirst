import React from 'react';
import{Text,View,ScrollView,Image,TextInput} from 'react-native';




const App = ()=>{
    return(
        <ScrollView>
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontSize:12}}>
      Hello Word
                </Text>
                <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png',}}
                style={{width:200,height:200}}/>
                <TextInput
                    style={{color:'grey',borderWidth:1,height:40,width:200,borderRadius:10}}
                />
            </View>

        </ScrollView>
    )
}


export default App;