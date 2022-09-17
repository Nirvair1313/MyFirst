import React, {useState}  from 'react';
import {View,Text,StyleSheet,Button,ScrollView,TouchableOpacity,RefreshControl} from 'react-native';





const App =()=>{

    const[Items,SetItems] = useState([
      
      {  Key:1 , item:'Item 1'},
      {  Key:2 , item:'Item 2'},
      {  Key:3 , item:'Item 3'},
      {  Key:4 , item:'Item 4'},
      {  Key:5 , item:'Item 5'},
      {  Key:6 , item:'Item 6'},
      {  Key:7 , item:'Item 7'},
      {  Key:8 , item:'Item 8'},
      {  Key:9 , item:'Item 9'},
      {  Key:10 , item:'Item 10'},
      {  Key:11 , item:'Item 11'},
      {  Key:12 , item:'Item 12'},
      {  Key:13 , item:'Item 13'},
      {  Key:14 , item:'Item 14'},
      {  Key:15 , item:'Item 15'},
      {  Key:16 , item:'Item 16'},
      {  Key:17 , item:'Item 17'},
      {  Key:18 , item:'Item 18'},
        ]);

const[Refreshing,setRefreshing] = useState(false);

const onRefresh =()=>{
    setRefreshing(true);
    SetItems([...Items,{Key:69,item:'Items 69'}]);
    setRefreshing(false);
}

return(
    
    <ScrollView style={styles.Body}
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

            

                )
                }
        )}
        
    
    </ScrollView>

);
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
        backgroundColor:"#F36723",
        alignItems:"center",
        
    }
})