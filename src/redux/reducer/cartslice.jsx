//  creating an slice for user state management 
import { createSlice } from "@reduxjs/toolkit";

// creating user initial state
export const initialState = {
    cart:[],
    total:0
};

const cartSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
     addProduct: (state,action) =>{
     console.log(state,action.payload)
     },
     removeProduct:(state,action) =>{
        console.log(state,action.payload)
     },
     updateProduct:(state,action) =>{
        console.log(state,action.payload)
     },
     clearProduct:(state,action) =>{
        console.log(state,action.payload)
     },

    }
});


// exporting the user reducer actions 
export const {addProduct,removeProduct} =  cartSlice.actions;

//  exporting the cartSlice reducer as default
export default cartSlice.reducer;