import React ,{useState}from 'react';
import{Text,View,StyleSheet,TextInput,Button} from 'react-native';



const GoalInput = props =>{
    const[enteredGoal,setEnteredGoal] = useState('')


    const GoalInputHandler =  (enteredText)=>{
        setEnteredGoal(enteredText)
    }



    return(

            
    <View style={styles.inputContainer}>
    <TextInput placeholder='courseGoal' style={styles.input} value={enteredGoal}  onChangeText={GoalInputHandler}/>
    
    <Button title='Add'  onPress={props.onAddGoal.bind(this,enteredGoal)}  /> 
</View>
    )
}


export default GoalInput;


const styles = StyleSheet.create({
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

})