import { View, Text,TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Fs from './Fs'



export default function HeaderTab() {
   const [activeTab,setActiveTab] = useState('Delivery')

  






  

  return (
    <View style={{flexDirection:'row',alignSelf:'center'}}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white" 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
      <HeaderButton
        text="PickUp"
        btn="white"
        textColor="black"
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        />
    </View>
  )
}

const HeaderButton = (props) =>(
  <TouchableOpacity style={{
    backgroundColor: props.activeTab === props.text ? "white":"black",
    paddingHorizontal: 16,
    borderRadius:30,
  paddingVertical:6}} onPress={()=>props.setActiveTab(props.text)}
  >
    <Text style={{
      fontSize: 15,

      color: props.activeTab === props.text ? "black":"white",
    }}>{props.text}</Text>
    </TouchableOpacity>
)







