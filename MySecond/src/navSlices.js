import { createSlices } from '@reduxjs/toolkit';

const intialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
};



export const  navSlices = createSlice({
    name: "nav",
    intialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },


  
        
setTravelTimeInformation: (state, action) => {
    state.travelTimeInformation = action.payload;
},

        setDestination: (state, action) => {
    state.destination = action.payload
}

    },
    
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlices.actions;


export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeinformation;


export default navSlices.reducer;