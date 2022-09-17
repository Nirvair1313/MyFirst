import { View, Text ,Image} from 'react-native'
import React from 'react'

const Testy = ({props}) => {
  return (
    <View>
         
              <Image
                  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMbbhgPUQQZzygmEVYlYJFYJXekquroUhSg&usqp=CAU",}}
             style={{width:300,height:300}}
                      />
              
      
    </View>
  )
}

export default Testy