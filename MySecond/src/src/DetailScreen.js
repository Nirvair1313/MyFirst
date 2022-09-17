import * as React from 'react';
import{View, Text,Button} from 'react-native';


class DetailScreen extends React.Component{
    constructor(props){
        super(props);

        
    }
    render(){
        return(
            <View style={{ flex:1, justifyContent:"center", alignItems:"center"}}>
                <Text>Detail Screen</Text>
                <Button title='back' onPress={()=>this.props.navigation.goBack()}/>
            </View>
        )
    }
}
export default DetailScreen;