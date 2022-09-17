import React ,{useState} from 'react';
import{Text,View,StyleSheet,Button,TouchableOpacity,TextInput} from 'react-native';




function App  () {
    const[name,SetName] = useState('Nirvair');
    const [password,Setpassword] = useState('')


 
    return(
  
        <View style={styles.Container}>
            <Text style={styles.text}>
                My Name is {name}
            </Text>
            <TextInput title="type here" placeholder='Enter Username'  onChangeText={()=>SetName()}   style={{borderWidth:1,borderRadius:4,borderColor:"grey",margin:10,width:200}} />
            <TextInput title="type here" placeholder='Password'  onChangeText={()=>Setpassword()}   style={{borderWidth:1,borderRadius:4,borderColor:"grey",margin:10,width:200}} />
            <Button title=' Change text' onPress={()=>SetName('Bao')}/>
        </View>

    )
}

const styles = StyleSheet.create({
Container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    
},
text:{
    fontSize:18,
}
})


export default App;