import React,{useState,useEffect} from 'react';
import{Text,View,StylSheet,ActivityIndicator,FlatList} from 'react-native';


 export default  Apps = ()=>{
              const[isloading,setLoading] = useState(true)
              const [name,setname] = useState([])


    const GetAirline = async ()=>{
          try{
              const response = await
              fetch("https://api.instantwebtools.net/v1/airlines")

              const json = await response.json();
              setname(json.Airline)
          }  catch (error){
              console.error(error)
          } finally{
              setLoading(false)
          }

    }


     useEffect(()=>{
         GetAirline();
      }, [] )





            





return(
    <View  style={{flex:1,padding:10}}>
    {isloading? <ActivityIndicator/> :
       <FlatList
           data={name}
           keyExtractor={(item,index)=>index.toString()}
           renderItem={({item})=>(
               <Text>{item.logo},{item.name}</Text>
           )}
       />
       }

    </View>
)

    }








     
