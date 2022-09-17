import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './store';



export default  function App  () {
    return (
         <Provider store={store}>
        
        
<View style={styles.Container}>
            <Text>
                Let is Build Uber 
               
            </Text>
        
 

        
   
   </View>
    </Provider>  

    )
}



const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center"
        
    }
})