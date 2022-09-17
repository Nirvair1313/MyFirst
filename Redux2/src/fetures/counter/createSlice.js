import { createSlice } from "@reduxjs/toolkit"
//import store from "../../app/store"


export  const counterSlice = createSlice({
    name: 'counter',
    initialState: {
    value: 0,
},
    reducers: {
        increment: state => {
            state.value +=1
        },
        decrement: state => {
            state.value -=1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        
},


})
//console.log(counterSlice.actions.increment())
//console.log(counterSlice.actions.decrement())
//console.log(store.getState())
//store.subscribe(() => console.log(store.getState()))
export  const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;

//console.log(counterSlice.actions.increment())
//console.log(counterSlice.actions.decrement())