import { View, Text,ScrollView ,FlatList,SectionList} from 'react-native'
import React from 'react'



const Item = [
    { id: 'a', name: 'Devin' },
    { id: 'b', name: 'Gabe' },
    { id: 'c', name: 'Kim' },
    { id: 'd', name: 'Roch' },
    { id: 'e', name: 'jim' },
    { id: 'f', name: 'Mark' },
    { id: 'g', name: 'Smith' },
    { id: 'h', name: 'Jonas' },
    { id: 'i', name: 'John' },
 
      
    ]

function List() {
  return (
      <View>
          {/* <ScrollView>
     
          {Item.map((i) => (
              <View>
                  <Text style={{ fontSize: 30,textAlign:'center',margin:30,backgroundColor:'#0098',height:45 }}>{i.id} { i.name}</Text>
                
                  </View>
          ))}
              </ScrollView> */}
          

          <FlatList
              data={Item}
              renderItem={({ item }) => <Text style={{ fontSize: 30, margin: 10,backgroundColor:'#ff0',marginVertical:10 }}> {item.id}                { item.name}</Text>}
            
            
              
              
              
/>
         
          
          

    </View>
  )
}


export default List;