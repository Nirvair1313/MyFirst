import React,{useState} from 'react';
import { TextInput,Text,View,StyleSheet,Button,FlatList,TouchableOpacity } from 'react-native';
import GoalItem from '../src/GoalItem';



export default function App (){
    const[enteredGoal,setEnteredGoal] = useState('')
    const [courseGoal,setCourseGoal] = useState([])
    

const GoalInputHandler =  (enteredText)=>{
    setEnteredGoal(enteredText)
}



const AddGoalHandler = ()=>{
    setCourseGoal(currentGoal=>[...currentGoal,
        {key:Math.random().toString() ,value:enteredGoal }
    ])
}

const RemoveGoalHandler = ()=>{
    setCourseGoal(courseGoal!== enteredGoal)
    
}

return(
    <View style={styles.Screen}>
    
    <View style={styles.inputContainer}>
    <TextInput placeholder='courseGoal' style={styles.input} value={enteredGoal}  onChangeText={GoalInputHandler}/>
    
    <Button title='Add'  onPress={AddGoalHandler}  /> 
</View>
<View>

   <FlatList
       data={courseGoal}
       key={courseGoal}
       renderItem={itemData =>< GoalItem title={itemData.item.value}/>
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
       margin:10,
       marginVertical:10,
       padding:15,
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