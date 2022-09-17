import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList,StyleSheet,TextInput, Button,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Dispatch } from 'react';
import { Provider, useDispatch } from 'react-redux';


    




export default function axi() {
    const [data, setData] = useState([
    ])
    const [name, setName] = useState([])
    const [username, setuserName] = useState([])
    const [submit, setSubmit] = useState(false)
    //const [respose, setRespose] = useState([])
    // const[users,setUsers]= useState([])
    
// const data = [
//    { name: "Leanne Graham" },
//     { username: "Bret" },
// ]
    

    //  console.log(data)
      //console.log(setData)

    const navigation = useNavigation()

   
const Stack = createNativeStackNavigator()



useEffect(() => {
     axios.get(`https://jsonplaceholder.typicode.com/users$`).then(respose => {
       console.log(respose)
        setData(respose.data)
           console.log(data);
        
        
         })
                .catch(error => {
                   console.log(error)
                })
    
     }, [])




    const handlepress = () => { 
       
        alert(name)
        console.log(data)
        
         console.log(name)
console.log(username)
          console.log(setData)
       // console.log(username)
       
         console.log(setName)
             
      //  console.log(setData)
        console.log(handlepress)
       //let data = name.find.name
       
        if (data.find.name===data.find.name) {
            console.log(data)
            console.log(navigation.navigate('Home'))
            // console.log(setuserName)
       

                        
            // console.log(Home)
            //console.log(handlepress)
          
        }   else {
              console.log('plz correct Name and userName')
            
         }
    }




    
    return (
       
        <View style={{ flex: 1, padding: 5 }}>
                
            <FlatList
                data={data}
                renderItem={({ item }) => (
                        
                        
                    <Text style={{ fontSize: 30 ,borderColor:'red',borderWidth:1,borderRadius:1}}>{ item.name}{item.username}</Text>
                    
                    
                        
                )}
            />

            <TextInput placeholder='name' onContentSizeChange={setName}/>
            <TextInput placeholder='userName' onChangeText={setuserName} />
            <Button title='Submit' onPress={handlepress}/>
        </View>

        
    )
}