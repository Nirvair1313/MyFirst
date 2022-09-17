import React,{useState} from 'react';
import { Text, View, StyleSheet, Button,FlatList,RefreshControl,SectionList } from 'react-native';



const App = () => {
const[refresh,setRefesh] = useState(false)
  const [item, setItem] = useState([
    { name:  "Item 1"},
    { name:  "Item 2"},
    { name:  "Item 3"},
    { name:  "Item 4"},
    { name:  "Item 5"},
    { name: "Item 6" },
    { name: "Item 6" },
    { name: "Item 7" },
           
    { name: "Item 8" },
            
             { name: "Item 9" },
              { name: "Item 10" },
               { name: "Item 11" },
                { name: "Item 12" },
                 { name: "Item 13" },
                  { name: "Item 14" },
                   { name: "Item 15" },
                    { name :  "Item 16"},
                    {  name: "Item 17" },
                     { name: "Item 18" },
                      { name: "Item 19" },
                       { name: "Item 20" },
                        { name: "Item 21" },
                         { name:  "Item 22"},
                          { name:  "Item 23"},

])
  // const [text, setText] = useState('Hello ')
  


  const Data = [{
    
    title: 'Title 1',
    data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
  },
  {
    title: 'Title 2',
    data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
  },
  {
    title: 'Title 3',
    data: ['Item 3-1', 'Item 3-2', 'Item 3-3'],
  },
  {
    title: 'Title 4',
    data: ['Item 4-1', 'Item 4-2', 'Item 4-3'],
  },
  {
    title: 'Title 5',
    data: ['Item 5-1', 'Item 5-2', 'Item 5-3'],
  },
  {
    
    title: 'Title 6',
    data: ['Item 6-1', 'Item 6-2', 'Item 6-3'],
  },
  {
    
    title: 'Title 7',
    data: ['Item 7-1', 'Item 7-2', 'Item 7-3'],
  },
    {
    
    title: 'Title 8',
    data: ['Item 8-1', 'Item 8-2', 'Item 8-3'],
  },
    
  ]


  const change = () => {
    setRefesh(true)
    setItem([...Data, {  name: "Item 24" }])
    setRefesh(false)
    

    // setName('Nirvair Singh')
    // setText('Hello Nirvair')
    
  }

  return (
      
      <SectionList
        keyExtractor={(item.index) } 
        sections={Data}
      renderItem={({ item }) => (
           <View style={styles.item}>
          <Text style={styles.i}>{item}</Text>
        </View>
        
        
          
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.item}>
            <Text style={styles.b}>{ section.title}</Text>
          </View>
        )}


      />
        
/*     
        // {/* <FlatList
        //   data={item}
        //   renderItem={({item}) =>(
        // <View style={styles.item}>
        //   <Text style={styles.i}>{item.name}</Text>
        //   </View>
        //   )} */
        





//           refreshControl={<
//             RefreshControl
//             refreshing={refresh}
//             onRefresh={change}
//             colors={["#e6d"] } />
//           
    
        
        
    );


    }


const styles = StyleSheet.create({
  Container: {
      flex:1,
        alignitem:"center",
    justifyContent: "center",
  
 
    
    
        
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    
    margin: 10,
    textTransform:'uppercase'
    
    
  },
  i: {
    
    backgroundColor: "#00F",
    marginHorizontal: 10,
    fontSize: 34,
    justifyContent: 'center',
    alignItems: 'center',
    
    margin:10,
  },
  b: {
    flex:1,
    backgroundColor: "#34ebcc",
    justifyContent: "center",
    alignItems: 'center',
    fontSize: 30,
    margin:10
  }
});
export default App;

