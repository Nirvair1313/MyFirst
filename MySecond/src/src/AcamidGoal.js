import React,{useState} from 'react';
import { TextInput,Text,View,StyleSheet,Button,FlatList,TouchableOpacity } from 'react-native';
import GoalItem from '../src/GoalItem';
import GoalInput from '../GoalInput';



 export default function App  (){
  
    const [courseGoal,setCourseGoal] = useState([])
    

const GoalInputHandler =  (enteredText)=>{
    setEnteredGoal(enteredText)
}



const AddGoalHandler = GoalTitle =>{
    setCourseGoal(currentGoal=>[...currentGoal,
        {id:Math.random().toString() ,value:GoalTitle }
    ])
}

const RemoveGoalHandler = GoaId=>{
    setCourseGoal(currentGoal =>{
        return currentGoal.filter((Goal)=>Goal.id !==GoaId)
    }

    )
    
}

return(
    <View style={styles.Screen}>
    <GoalInput onAddGoal={AddGoalHandler}/>
   
<View>

   <FlatList
       data={courseGoal}
       key={courseGoal}
       renderItem={itemData =>< GoalItem  id={itemData.item.id} onDelete={RemoveGoalHandler}  title={itemData.item.value} />
       }
       
           
           
           
           
       

    
   /> 
   
   </View>
   
</View>


)

}

const styles = StyleSheet.create({
    Screen:{
        
        

    },
    inputContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        margin:10,
        
        

    },
    input:{
        width:200,
        borderRadius:5,
        borderWidth:1,
        
        
        
    
        
    
    },
    button:{
        width:20,
        height:20,
        flexDirection:'row',
        justifyContent:"space-around"
    },
   listItem:{
       backgroundColor:"#f24",
       tintColor:"#00f221",
       fontSize:20,
       margin:20,
       marginVertical:20,
       padding:20,
       color:"#00888777"
    
   },
   item:{
       tintColor:"#65f",
       textAlign:"center",
       color:"#007",
       backgroundColor:"#421",
       alignItems:"center",
       justifyContent:"center",
       fontSize:"#012",
       borderRadius:5,
       borderWidth:1,
    
       
   }
   

}) 