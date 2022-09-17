import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../fetures/counter/createSlice';

export default configureStore({
    reducer:
        { counter: counterReducer } 
    
})


