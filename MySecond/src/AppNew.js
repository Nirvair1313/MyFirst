
import React,{useState} from 'react';
import {Text,View,Modal,StyleSheet,TextInput,Button} from 'react-native';



const Apps = ()=>{
    const [Email,SetEmail]= React.useState('');
    const [Submit,SetSubmit] = React.useState('');
    const [ShowWarning,SetshowWarning] = React.useState(false);
const onpressHnadler =()=>{
  if(Email.length > 0){
      SetSubmit(!Submit);
  } else{
      SetshowWarning(true);
}
}

return(
    <View style={styles.body}>
    <Modal    visible={ShowWarning}
    
     onRequestClose={()=>
     SetshowWarning(false) }
    >
    <View style={styles.centred}>
    <Text style={styles.warningmodal}> Plz Enter Email Account</Text>
    </View>
    </Modal>
       
        <TextInput style={styles.input} placeholder='Email' value={Email} onChangeText={(text)=>SetEmail(text)}/>
        <Button title='Submit'style={styles.Buttonc} onPress={onpressHnadler}/>
    </View>
);

}

export default Apps;
const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#F1F799",
    },
    text:{
        fontSize:25,
        
    },
    input:{
        borderRadius:5,
        borderColor:"grey",
        borderWidth:5,
        width:200,

    },
    Buttonc:{
        paddingBottom:15,
    },
    warningmodal:{
        
        fontSize:20,
        
        borderWidth:1,
        backgroundColor:"#F1F6",
        borderRadius:5,
        borderColor:"red",
    
        width:'100%',
        height:200,
        marginRight:25,
        margin:50
        

    },
    centred:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    }

})