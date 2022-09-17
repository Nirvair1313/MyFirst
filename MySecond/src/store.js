import { configureStore } from '@reduxjs/toolkit';
import navReducer from "./navSlices";


export const store = configureStore({
    reducer: {
        nav:navReducer
    }
})