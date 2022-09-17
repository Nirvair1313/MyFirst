
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity,SafeAreaView,TextInput,ScrollView } from 'react-native'
import { AdjustmentsIcon, ChevronDownIcon, SearchIcon, UserAddIcon, UserCircleIcon, UserIcon, UsersIcon  } from "react-native-heroicons/outline";
import Categeries from './Components/Categeries';

import FeatureRow from './Components/FeatureRow';


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
    
        navigation.setOptions({
            headerShown:false
        })
            
            
        
            
        
},[])


    return (
        <SafeAreaView style={{backgroundColor:"white"}}>
        <View>
      
        <View style={{flexDirection:'row'  ,alignItems:"center"}}>
            
     
              <TouchableOpacity>
                    
          <Image
              source={{
                  uri:'data:image/png;base64,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'
              }}
              style={{width:70,height:50,borderRadius:10,borderWidth:1,}}
                />
          </TouchableOpacity>
           <View style={{flex:1}}>
                <Text>Deliver Now!</Text>
<TouchableOpacity>
                    <Text style={{ fontSize: 20, marginLeft: 5,marginTop:-10, fontWeight:"bold",color:"#064",justifyContent:"center"}}>Current Location
                        
                                    < ChevronDownIcon size={30} color="#00a" style={{ marginVertical:10 }} /></Text>
                            
                        </TouchableOpacity>
                        
                    </View>  
                    <TouchableOpacity>
                        
                    <UserIcon size={35} style={{  padding: 10 }} color="magenta" />
                </TouchableOpacity>    
                </View>
                <View style={{ flexDirection:'row', alignItems:"center"}}>
                    <View style={{flexDirection:'row',backgroundColor:"grey" ,width:300,marginLeft:8,height:40}}>
                        <SearchIcon size={30} color="#ff8822" style={{margin:7}} />
<TextInput  placeholder='Food' />
                    </View>
                   
                    <AdjustmentsIcon color="#009" />
                   
                    <View>
                    
                        </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <ScrollView contentContainerStyle={{paddingBottom:100}} >
                    <Categeries />
                    <View>
                    <FeatureRow
                        title="Indian Food"
                        description="Paid Placement  for Patners"
                    featureCategery="featured"/>
                    
                     <FeatureRow
                        title="Italian Burger"
                        description="Not Available yet"
                    featureCategery="featured"/>
                    
                     <FeatureRow
                        title="Amrican Food"
                        description="Paid Placement  for Patner"
                        featureCategery="featured" />
                     <FeatureRow
                        title="Maggy and Pasta"
                        description="Come in soon"
                    featureCategery="featured"/>
                    </View>
                    
                        </ScrollView>
                    </View>
           
            
            
  </SafeAreaView>
  )
}

export default HomeScreen