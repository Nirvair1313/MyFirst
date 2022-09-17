import React from 'react'
import { View, Text, ScrollView, Touchable,TouchableOpacity } from 'react-native'

import CategeriesCard from './CategeriesCard'


const Categeries = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 10,
        
          
              
              
              
      }} 
      horizontal>
      <View style={{ justifyContent: "space-between", flexDirection: "row", }}>
     
        <CategeriesCard     imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMbbhgPUQQZzygmEVYlYJFYJXekquroUhSg&usqp=CAU" title="Testy" />
      <CategeriesCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU"title="Burger"  />
        
          <CategeriesCard  imgUrl="https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" title="Italian"/>
          <CategeriesCard  imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68GaMxj6iSn18pYEVZyW0lLLYgbEzbdmFQ&usqp=CAU" title="Amrican Food"/>
           <CategeriesCard  imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WcgGWLYXzyCf-gzIQI-Hf7ndsdgrcm_TtQ&usqp=CAU" title="Indian Vegiterian"/>
   
       
      </View>
          
    </ScrollView>
  )
}

export default Categeries

