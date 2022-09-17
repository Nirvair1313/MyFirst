import React from "react";
import { View,Text,Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, } from "./createSlice";

 export function   Counter () {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()



    return (
        <View>
            <Text style={{fontSize:20,alignItems:'center'}}>Counter</Text>
            <View style={{margin:10,padding:10}}>
                <Button title="Increment" onPress={() => dispatch(increment())} />
                <Button title="Decrement" onPress={() => dispatch(decrement())} />
                <Text style={{fontSize:35}}>{ count}</Text>
            </View>
        </View>
    
)


}
export default Counter;




