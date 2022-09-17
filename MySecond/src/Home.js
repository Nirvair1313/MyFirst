import { View, Text,TextInput,StyleSheet,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])
  const[name,setName] = useState()
  const [username, setUserName] = useState()
  const[submit,setSubmit]= useState(false)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(Response => {
      console.log(Response)
      setData(data)
    }).then(error => {
      console.log(error)
    })
  }, [])
  




   
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.name} </Text>
          {/* <TextInput style={styles.input} placeholder='FirstName' onChangeText={()=>('setFirstName')}/>
          <TextInput style={styles.input} placeholder='LastName' onChangeText={()=>('setLastName')} />
          <Button title=' Submit'/> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    text: {
        fontSize:30
    },
    input: {
        
        width: 200,
        borderRadius: 5,
        borderWidth: 1,
        margin:10
    }
})
