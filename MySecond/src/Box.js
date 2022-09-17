import React,{useState} from 'react';
import{Text,View,TextInput,StyleSheet,Button,FlatList,TouchableOpacity} from 'react-native';



export default function App (){
    const[enteredGoal,setEntredGoal] = useState('');
    const[courseGoals,setCoureseGoals] = useState([]);


    const  goalInputHandler =(enteredText)=> {
        setEntredGoal(enteredText);
    };
    

    const AddGoalHandler=()=> {
        setCoureseGoals  ([...courseGoals, {id:Math.random().toString(),value:enteredGoal}]);
    };
    return(
        <TouchableOpacity onPressIn={Screen}>
        
        
        
        <View style={styles.Screen}>
        
            
            <TextInput
            placeholder="Add Goal" style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <Button
            title="Add Goal" onPress={AddGoalHandler}
            />
            <View>
            <FlatList data={courseGoals}
            
            renderItem={itemData=>(
                <Text>{itemData.item.value}</Text>

            )

            }
            />



                
                
            
               
                
            </View>
        </View>
        </TouchableOpacity>
        
    );
}



const styles = StyleSheet.create({
    input:{
        Screen:{
            

        }

    }
})





