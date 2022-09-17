
import React from 'react'
import { View, Text,ScrollView,TouchableOpacity,Image } from 'react-native'
const CategeriesCard = ({imgUrl,title}) => {
  return (
      <TouchableOpacity>
      
      <Image source={{
        uri: imgUrl
      }

      } style={{width:100,height:80,borderRadius:5,borderWidth:1,justifyContent:"space-between",}} />
      
        <ScrollView
           
      >
        
        
 
          <Text style={{textAlign:"center"}}>{ title}  </Text>
    
        </ScrollView>
     </TouchableOpacity>
  )
}

export default CategeriesCard
