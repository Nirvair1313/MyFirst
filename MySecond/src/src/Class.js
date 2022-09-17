
import React,{Component} from 'react'
import {Text,View} from 'react-native';


class App extends Component{
    render(){
        return(
            <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"orange"}}>
            <Text style={{fontSize:23,backgroundColor:"coral"}}>
                Hello Word
            </Text>

            </View>
        );
    }
}


export default App;