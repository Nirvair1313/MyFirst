

import React,{useState} from 'react';
import {Text,View,StyleSheet,Button,TextInput,FlatList,RefreshControl} from 'react-native';

import Goalitem from './Goalitem';
//import Goalinput from '../src/Goalinput'




export default function App (){
    
    const [courseGoal,setCourseGoal] = useState([]);
    const [refreshing,setRefreshing] = useState(false)
   


    const onRefresh = ()=>{
        setRefreshing(true)
    
        
        setRefreshing(false)
    }
   

const AddGoalHandler = GoalTitle=>{
    setCourseGoal(currentGoals=>[ ...currentGoals, {id:Math.random().toString(),value:GoalTitle}])
    
}

const removeGoalHandler = Goalid =>{
    setCourseGoal(currentGoals=>{
        return currentGoals.filter((Goal)=>Goal.id !== Goalid)
    })
}

return(
    <View >
    
    <View style={styles.text}>
<Goalinput onAddGoal={AddGoalHandler} /> 

        </View>
        
   
        
        <FlatList
        keyExtractor={(item,index)=>item.id}
         data={courseGoal}  renderItem={itemData => (  <Goalitem id={itemData.data.id} onDelete={removeGoalHandler}  title={itemData.item.value}/>)}

        
           
        
    

            
    
/>
      </View>  
         
      
    
)



}



const styles = StyleSheet.create({
    Body:{

alignItems:"center",
justifyContent:"center",
padding:10,
borderWidth:1,
borderRadius:3,
width:200,
    
   
    },
    view2:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    input:{
        
        borderRadius:5,
        borderWidth:1,
        width:200,
        
    },
   
        
    

    
    text:{
    flexDirection:"row",
    justifyContent:"center",
    marginVertical:15,
    alignItems:"center",
    backgroundColor:"#086",
    textShadowColor:"#990",
    textAlign:"center",
    fontSize:20,
    borderColor:'#00f',
    borderWidth:1,
    
    },
    item:{
        textAlign:"center",
        marginVertical:10,
        borderRadius:3,
        fontSize:15,
    
    },

  
    
   
    
})