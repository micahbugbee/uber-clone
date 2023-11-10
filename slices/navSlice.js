import { createSlice } from "@reduxjs/toolkit";

// Initailizing our states
const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

// Creating the nav Slice layer
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
});

// Making our *push data* action items available to the rest of the App
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Making our *pull data* actions available with Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;

