import *as React from 'react';
import { view,Text,Button } from 'react-native';



class AnotherNavigation  extends React.Component{
    constructer(props){
        super(props);
    }


render(){
    return(
        <view style={{flex:1,justifyContent:"center", alignItems:"center"}}>
        <Text> AnotherNavigation</Text>
        <Button title='goto Another Screen' onPress={()=>this.props.navigation.navigate('HomeScreen')}/>
        </view>
    )
    }


}


export default AnotherNavigation;