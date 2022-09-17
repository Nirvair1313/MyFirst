import React from 'react';
import {Text,View,StyleSheet} from 'react-native'

  function App() {
    return(
        <View style={styles.Container}>
            <Text>Hello Word</Text>
            </View>
    );


    }


const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignitem:"center",
        justifyContent:"center",
    },
});
export default App;

