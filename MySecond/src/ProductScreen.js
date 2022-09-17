

import React,{useState,useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, ScrollView,TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const ProductScreen = () => {
const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false
      // headerTintColor: "#fff",
      // headerStyle: { backgroundColor: "#006",padding: 40 },
      // headerTitle: "Flipcart",
      // fontStyle: "italic",
      
    
  },[])
})
  
  const [focus, setFocused] = useState(true)
 
 
  const onchange = () => {
    setFocused()
    
    
  } 
  
  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop:12
      }}>


        <Text style={{ fontSize: 30 }}> Flipcart</Text>

<TouchableOpacity  onPress={onchange}   >

        {!focus ? 
          < MaterialCommunityIcons name='toggle-switch' size={35} color={"#f00"} />
          :
          < MaterialCommunityIcons name='toggle-switch-off' size={35} color={"#00f"} />}
     </TouchableOpacity>
      </ScrollView>
      
     
    </View>
  )
}

export default ProductScreen