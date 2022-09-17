
import React from 'react'
import { View, Text,TouchableOpacity,ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import CategeriesCard from './CategeriesCard'
import ResturantCard from './ResturantCard'
const FeatureRow = ({id,title,description, featureCategery}) => {
  return (
    <View style={{}}>
      
      <View style={{ justifyContent: "space-between", flexDirection:'row' }}>
      <Text style={{ fontWeight: 'bold',color:"black" }}>{title}</Text>
      {/* <Text style={{ fontWeight: 'bold' }}>{description}</Text> */}
      <Text style={{ fontSize: 20 }}> {featureCategery }</Text>
      <TouchableOpacity >
          <ArrowRightIcon    size={26} color="#00f"/>
        </TouchableOpacity>
        </View>
      <Text > {description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 20,
          
          
        }} showsHorizontalScrollIndicator={false}
      />
      
     <ScrollView horizontal >
      <ResturantCard
        id={123}
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmSCgJGj9hgenwi6l5xmKnlwH7BKWV79Sxw&usqp=CAU"
    
        title='Yo Sushy'  
        rating={4.6}
        genre='Japnese'

        address='Main Street Sukrali'
        shor_discrption='Japnese Food Best Food'
        dishes={[]}
        long={20}
        lat={0}
      />
      
      <ResturantCard
        id={123}
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmSCgJGj9hgenwi6l5xmKnlwH7BKWV79Sxw&usqp=CAU"
    
        title='Yo Sushy'  
        rating={4.6}
        genre='Japnese'

        address='Main Street Sukrali'
        shor_discrption='Japnese Food Best Food'
        dishes={[]}
        long={20}
        lat={0}
      />
      
      <ResturantCard
        id={123}
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmSCgJGj9hgenwi6l5xmKnlwH7BKWV79Sxw&usqp=CAU"
    
        title='Yo Sushy'  
        rating={4.6}
        genre='Japnese'

        address='Main Street Sukrali'
        shor_discrption='Japnese Food Best Food'
        dishes={[]}
        long={20}
        lat={0}
      />
      
      <ResturantCard
        id={123}
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmSCgJGj9hgenwi6l5xmKnlwH7BKWV79Sxw&usqp=CAU"
    
        title='Yo Sushy'  
        rating={4.6}
        genre='Japnese'

        address='Main Street Sukrali'
        shor_discrption='Japnese Food Best Food'
        dishes={[]}
        long={20}
        lat={0}
      />
      
      <ResturantCard
        id={123}
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmSCgJGj9hgenwi6l5xmKnlwH7BKWV79Sxw&usqp=CAU"
    
        title='Yo Sushy'  
        rating={4.6}
        genre='Japnese'

        address='Main Street Sukrali'
        shor_discrption='Japnese Food Best Food'
        dishes={[]}
        long={20}
        lat={0}
      />

</ScrollView>
    </View>
    

    
  )
}

export default FeatureRow;
