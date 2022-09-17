import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTab from '../Components/HeaderTab'


export default function Home() {

  return (
    <SafeAreaView
    style={{backgroundColor:"#eee"}}>
      <View style={{backgroundColor:'white',padding:16}}>

        <HeaderTab />
       

        </View>
    </SafeAreaView>
   
  )
    
}