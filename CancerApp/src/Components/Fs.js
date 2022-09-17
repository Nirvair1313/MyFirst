import { View, Text,FlatList,Image,TextInput } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios'


export default function Fs() {

const [data,setData] = useState([])

    
    
    
    
      useEffect(() => {

    axios.get(`https://dummyjson.com/products`).then(response => {
     console.log(response)
     setData(response.data)
     }).catch(error => {
     console.log(error)
    })
  
      }, [])
  
  
  


  return (


   
      <View>
              <FlatList
      data={data}
        renderItem={({ e }) => {
          <View>
            <Text style={{ fontSize: 25, color: 'red', justifyContent: 'center', alignItems: 'center', margin: 10 }}>{e.title}</Text>
            <Image source={{ uri: `${item.images}` }}
              style={{ width: 100, height }}
            />
          </View>
        
        }}
     
    />
  
      
    </View>
  )
}  





