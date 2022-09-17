import { View, Text,SectionList,StyleSheet } from 'react-native'
import React from 'react'


const sections = [
    {
        id: '0',
        title: 'Basic Components',
        data: [
            { id: '0', text: 'View' },
            { id: '1', text: 'Text' },
            { id: '2', text: 'Image' },
                
         
            
        ],
        renderItem: ({ item }) => {
            return <Text style={styles.row}>{ item.text}</Text>
        },
    },
    {
        id: '1',
        title: 'List Components',
        data: [
            { id: '1', text: 'Scrollview' },
              { id: '2', text: 'FlatList' },
            
        ],
        renderItem: ({ item }) => {
            return <Text style={styles.rowDark}>{item.text}</Text>
            
        },

       
    },
    
    
]




export default function SecL() {

  return (
      <SectionList
          style={styles.container}
          sections={sections}
          renderSectionHeader={({ section }) => {
            return  <Text style={styles.color}> { section.title}</Text>
          }}
          keyExtractor={(item)=>item.id}
    />
  )
}




const styles = StyleSheet.create({
    container: {
        flex:1
    },
    row: {
        margin: 30,
        backgroundColor: '#00f',
        color: '#fff',
        textAlign: 'center',
        fontSize:20
        
    },
    rowDark: {
        margin: 30,
        backgroundColor: '#000',
        textAlign: 'center',
        fontSize: 20,
        color:"#fff"
    },
    color: {
        fontSize: 30,
        margin: 10,
        
        
    }


})