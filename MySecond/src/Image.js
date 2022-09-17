import { View, Text, Image} from 'react-native'
import React from 'react'

const   Image = () => {
  return (
    <View>
      <Image source={{uri:image}} style={{width:100,height:100}}/>
    </View>
  )
}

export default Image;