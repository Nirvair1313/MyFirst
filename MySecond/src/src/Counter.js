import React,{ Component } from "react";
import{Text,View,Button,StyleSheet} from "react-native";



class Counter extends Component{
    constructor(){
        super();
            this.state={
                value:0,
                total_taps:0,
        
            
        }
    }
    
    
    Incrementvalue =() =>{
        this.setState({
            value:this.state.value+1,
            total_taps: this.state.total_taps+ 1
        });

        console.log("value:",(this.state.value+ 1))

        
    }
    Decrementvalue =() =>{
        this.setState({
            value:this.state.value-1,
            total_taps: this.state.total_taps- 1
        });
        

        console.log("value:",(this.state.value- 1));

    }

    render(){
            return(
                <View style={styles.container}>
                    <Text style={{fontsize:60,marginBottom:-30}}>{this.state.value}</Text>
                    <Text style={{fontSize:12,padding:30,color:"grey"}}>{this.state.total_taps}</Text>
                    <Text> Build app counter</Text>
                    {/* <Statusbar style="auto"/> */}
                    <View style={{flexDirection:"row"}}>
                    <Button onPress={this.Incrementvalue} title="Decrease"/>
                    <Text>  </Text>
                    <Button onPress={this.Decrementvalue} title="Increase"/>
                    </View>
                   </View>
            )
        
        }
    }
    
        


    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"ff2",
            alignItem:"center",
            justifyContent:"center"
        
        }
    
    });


    export default Counter;