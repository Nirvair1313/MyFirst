import React from 'react';
import{UseState} from 'react-native';
import{Text,View,StyleSheet,Button} from 'react-native';








 function App () {
    return(
        <View style={styles.Container}>
            <Text>Hello Word </Text>
            <Button title="change" />
        </View>
    );
}




const styles = StyleSheet.create({
    Container:{
        alignItems:"center",
        justifyContent:"center"
    }
});


export default App;