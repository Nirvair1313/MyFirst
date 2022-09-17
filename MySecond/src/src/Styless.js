import  React,{useState} from 'react';
import {Text,StyleSheet,ActivityIndicator,Button,View,TextInput} from 'react-native'; 



export default  function App (){


const [outputText,SetOutputText] = useState('Change is New Text');

return(
    <View style={styles.Container}>

    <ActivityIndicator size="large" color="ffffff"/>

        <Text> {outputText} </Text>
        
        <Button
        title="Change "
        onPress={()=> SetOutputText('Changed Text Now!')}/>
        <TextInput
        placeholder="Course Goal"
            style={{borderColor:"black",borderWidth:1,padding:15}}
        />
        <Button 
        title='Add'/>

        </View>

);
}
      


const styles = StyleSheet.create({
    Container:{
        flex:1,
         padding:10,
         backgroundColor:"#ff4609",
         flexDirection:"column",
         justifyContent:"space-between"

    },
   
        

        

        
    
});








