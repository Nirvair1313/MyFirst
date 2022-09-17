import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'

export default function SetI() {
    const [count, SetCount] = useState(0)
    

    useEffect(() => {
        const Id = setInterval(() => SetCount((count)=> count+1), 1000)
            
            return ()=> clearInterval(Id)
    },[])



  return (
      <View>
          


          <Text style={{ fontSize: 30 ,textShadowColor:'#980',textAlign:'center',justifyContent:'center',alignItems:'center'}}> { count}</Text>
    </View>
  )
}