import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import HeaderNew from '../src/HeaderNew';
import NewScreen from '../src/NewScreen';
import ThirdScreen from '../src/ThirdScreen'






const App = ()=>{
    return(
        <View style={styles.body}> 

<HeaderNew title="HeaderNew"/>
        <Text>
        <NewScreen />
        <ThirdScreen/>
        </Text>
        
        </View>
    )
}


export default App ;


const styles = StyleSheet.create({
body:{

    justifyContent:'center',
    alignItems:'center'

}
})