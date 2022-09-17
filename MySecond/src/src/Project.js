import React, {useState}  from 'react';
import {View,Text,StyleSheet,Button,ScrollView,TouchableOpacity,RefreshControl,FlatList} from 'react-native';





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

const[Refreshing,setRefreshing] = useState(false);

const onRefresh =()=>{
    setRefreshing(true);
    SetItems([...Items,{name:'Items 69'}]);
    setRefreshing(false);
}

return(
    
   /* <ScrollView style={styles.Body}
    refreshControl={
        <RefreshControl
        
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={["#f21234"]}
        />
    }>
    
        {
            Items.map((item) => {
                return(
                <View style={styles.item} Key={item.Key} >
                    <Text style={styles.text}>{item.item}</Text>
                </View>
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
        margin:10,
        backgroundColor:"#F32345",
        alignItems:"center",
        
    }
})