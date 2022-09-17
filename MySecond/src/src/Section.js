import React, {useState}  from 'react';
import {View,Text,StyleSheet,Button,ScrollView,TouchableOpacity,RefreshControl,FlatList,SectionList,} from 'react-native';





 const App =()=>{
    
    const[Items,SetItems] = useState([
      
      {  name:'Item 1'},
      {   name:'Item 2'},
      {   name:'Item 3'},
      {  name:'Item 4'},
      {  name:'Item 5'},
      {   name:'Item 6'},
      {   name:'Item 7'},
      {   name:'Item 8'},
      {   name:'Item 9'},
      {   name:'Item 10'},
      {   name:'Item 11'},
      {   name:'Item 12'},
      {   name:'Item 13'},
      {   name:'Item 14'},
      {   name:'Item 15'},
      {   name:'Item 16'},
      {   name:'Item 17'},
      {   name:'Item 18'},
        ]);
        

    
        
        const Data=[
            {
            title:'Title 1',
            data:['Item 1-1','Item 1-2','item 1-3'],
        },
        {
        title:'Title 2',
        data:['Item 2-1','Item 2-2','item 2-3'],
    },
{
  title:'Title 3',
    data:['Item 3-1','Item 3-2','item -3'],}]
         
        
const[Refreshing,setRefreshing] = useState(false);

const onRefresh =()=>{
    setRefreshing(true);
    SetItems([...Items,{name:"item 19"}],);
    setRefreshing(false);
}

return(
/*
    <SectionList
    keyExtractor={(item,index)=>index.toString()}
    sections={Data}
    renderItem={({item})=>(
        <View style={styles.item}>
        <Text style={styles.text}>{item}</Text>
                </View>
        
    )}
    refreshControl={
        <RefreshControl
         
             refreshing={Refreshing}
             onRefresh={onRefresh}
             colors={["#f17865"]}
             />
         
     }
    
    renderSectionHeader={({section})=>
    <View style={styles.item}>
        <Text style={styles.text}>{section.title}</Text>
    </View>}
    />
     
    
   /* <ScrollView style={styles.Body}
    refreshControl={
        <RefreshControl
        
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={["#f21234"]}
        />
    }>*/
    /*
        {
            Items.map((items) => {
                return(
                <View style={styles.item}  Items={Items}>
                    <Text style={styles.text}>{items.item}</Text>
                </View>
                )})}
                <ScrollView style={styles.Body}
                refreshControl={
                    <RefreshControl>
            */
           <FlatList
           
           keyExtractor={(item,index)=>index.toString()}
           data={Items}
           renderItem={({item})=>(
            <View style={styles.item}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
           )}
                refreshControl={
       <RefreshControl
        
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={["#f21234"]}
            />
        
    }

           
           />
            

                
                
        
    



            )
}

            
export default App;
const styles = StyleSheet.create({
    text:{
        fontSize:30,
        justifyContent:"center",
        alignItems:"center",
        

    },
    Body:{
        
    },
   
    item:{
        fontSize:30,
        margin:20,
        backgroundColor:"#F67899",
        alignItems:"center",
        
    },
})