
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StarIcon,LocationMarkerIcon } from 'react-native-heroicons/outline'

const ResturantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    shor_discrption,
    dishes,
    long,
    lat
}) => {
  return (
      <View style={{
          
      }}>
          <TouchableOpacity style={{}}>
              
              <Image
                  source={{
                      uri: imgUrl
                  }}
                  style={{width:200,height:150,marginLeft:5,margin:10,borderRadius:5,borderWidth:1}}
              />
              <View>
                  <Text style={{fontWeight:"bold" }}>{ title}</Text>
              </View>
              <View className='flex-row item-center space-x-1'>
                  <StarIcon color="black" opacity={1} />
                  <Text>
                  <Text> {rating}</Text>. {genre}
                  </Text>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                      
                          <LocationMarkerIcon color="red" />
                          
                      <Text>Nearly.{ address}</Text>
                      
                  </View>
              </View>
                  
              
          </TouchableOpacity>
     
    </View>
  )
}

export default ResturantCard