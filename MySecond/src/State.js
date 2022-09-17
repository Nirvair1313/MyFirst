import React,{Component} from "react";
import{Text,View,Button} from "react-native"







class State extends Component{
    constructor()
    {
        super();
        this.state={
            Data:"React Native"
        }
    }
      render(){
          return(
              <View>
                   <Text style={{fontsize:80, textAlign:"center" }}>
                       {this.state.Data}

                       <Button title="Update"
                       
                       onPress={()=>this.setState({ Data:"New Data"})}/>
                       
                       
                   </Text>
                   </View>
          );
      }
    }


    export default State;













  