import React,{ Component} from 'react';
import { View,Text } from 'react-native';

class PorpsComponent extends Component{
    constructor(props){
        super(props);
    }
   
    render(){
        const { name,value } = this.props;
        return(
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text>{name}</Text>
                <Text>{value}</Text>
            </View>
        
        )
    }
}
export default PorpsComponent;