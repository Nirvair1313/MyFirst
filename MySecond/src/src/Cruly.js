import React, {useState}from 'react';
import{Text,View,Button,FlatList,StyleSheet,ScrollView,RefreshControl,onrefresh} from 'react-native';




const Curly = ()=>{

    const[refreshing,setRefreshing] = React.useState(false)
    const[Name,SetName] = React.useState('New Text Add');
    const [Items,SetItems] = React.useState([
        {Items:'item 1'},
        {Items:'item 2'},
        {Items:'item 3'},
        {Items:'item 4'},
        {Items:'item 6'},
        {Items:'item 7'},
        {Items:'item 8'},
        {Items:'item 9'},
        {Items:'item 10'},
        {Items:'item 11'},
        {Items:'item 12'},
        {Items:'item 13'},
        {Items:'item 14'},
        {Items:'item 15'},

        
    ])
    const onChangeHandler =()=>{
        SetName('Added has been new text');
        setRefreshing(true)
        SetItems([...Items,{Items:'item 16'}]);
        
    }
return(

<ScrollView 

refreshControl={
          <RefreshControl
            refreshing={refreshing}
            
    
          />
        }
    >
{
    Items.map((item)=>(
        
            <View style={styles.items}  >
  
    <Text style={styles.text}>{item.Items}</Text>
    </View>
        

    )
    ) 
}


    
       

        
      
          
        
        
    
    </ScrollView>

)


}

export default Curly;

const styles = StyleSheet.create({
    items:{
        margin:10,
        justifyContent:"center",
        alignItems:"center",
        flex:1

    },
    text:{
        backgroundColor:"#f14",
        fontSize:40,
        margin:10,
        borderRadius:10
        

    }
})