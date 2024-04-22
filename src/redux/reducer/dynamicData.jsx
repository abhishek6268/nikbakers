//  creating an slice for user state management 
import { createSlice } from "@reduxjs/toolkit";

// creating user initial state
export const initialState = {
    navbar:[],
    home:[],
    ourStory:[],
    stores:[],
    contact:[],
    feedback:[],
    carrer:[],
    footer:[]
};

const dynamicData = createSlice({
    name:"user",
    initialState,
    reducers:{}
});


// exporting the user reducer actions 
export const {addProduct,removeProduct} =  dynamicData.actions;

//  exporting the dynamicData reducer as default
export default dynamicData.reducer;