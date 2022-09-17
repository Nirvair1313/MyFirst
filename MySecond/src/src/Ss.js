import React, {useState} from 'react';
import { TextInput,Text,View,StyleSheet,Button,Alert,TouchableOpacity,ToastAndroid } from 'react-native';






const Appd = ()=>{

  const [name,setName] = useState('')
  const[Submit,setSubmit] = useState(false)

onClickHandler = ()=>{
    
    if(name.length >  0){
        setSubmit(!Submit)
    } else  {
        //Alert.alert('Enter Name',



        ToastAndroid.showWithGravity('Plz Enter Name',
        ToastAndroid.BOTTOM,
        ToastAndroid.SHORT,
        )
            
        
    }
           


    
}



    

return(
    <View style={styles.body}>
        
        <Text style={styles.text}> Enter yourName  </Text>
        
        <View style={styles.m}>
        <TextInput style={styles.input} placeholder='Register' value={name} onChangeText={()=>setName()}/>
</View>
        <Button title='Submit'  style={styles.button} onPress={onClickHandler} color="#00f"/>


        </View>
      
    
)







}


export default Appd;


const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10
    },
    text:{
        fontSize:25
    },
    input:{
        borderRadius:5,
        borderWidth:1,
        borderColor:"grey",
        width:200,
        marginTop:10
    
    },
    m:{
        margin:10
    },
    
    button:{
        
   width:100,
   height:40,
   backgroundColor:"#00f",
   borderRadius:5,
   justifyContent:"center",
   alignItems:"center"
   
        
    },
    bv:{
        justifyContent:"center",
        alignItems:"center",
        margin:3
        
    }

})


