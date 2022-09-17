import React,{useState} from 'react';
import { Text, View, StyleSheet, Button,FlatList,RefreshControl,SectionList,TextInput,TouchableOpacity,TouchableHighlight,Pressable } from 'react-native';




const App = () => {
    const[name,setName] = useState('')
    const [submit, setSubmit] = useState(false)
    


    const onpressHandler = () => {
        setSubmit(!setSubmit)
    }

 return (
     <View style={styles.container}>
         <Text style={styles.text}> Enter Your UserName </Text>

             <TextInput style={styles.input} placeholder='Enter Name' onChangeText={() => setName()} />
             {/* <TouchableHighlight underlayColor="b3452"  activeOpacity={0.2} onPress={onpressHandler}> */}
                              {/* <Text style={styles.but}>Submit</Text> */}
         {/* <Button  title='Submit'  onPress={onpressHandler}/> */}
         {/* // </TouchableHighlight> */}

         <Pressable onLongPress={onpressHandler}
             hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
            
             style={({pressed}) =>
                 [{ backgroundColor: pressed? '#bf328e': '#80eb34' }]}>
         
           <Text style={styles.textt} >Submit</Text>
         </Pressable>
</View>





    
        
    )

}

export default App;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        
        alignItems:"center"
    },
    input: {
        fontSize: 25,
        borderColor: "#000",
        borderRadius: 5,
        borderWidth: 1,
        width: 200,
        alignItems: "center",
        margin:10

    },
    but: {
        width: 100,
        height: 40,
        backgroundColor: "#00f",
        borderRadius: 5,
        borderWidth: 1,
        textAlign: "center",
        padding:10

          
      },
    text: {
        fontSize: 20,
        
            
    },
    textt: {
        width: 100,
        height: 45,
        textAlign: 'center',
        padding: 12,
        borderRadius: 5,
        borderWidth:1,
        
    }
        
    



})
