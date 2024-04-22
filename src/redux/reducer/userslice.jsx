//  creating an slice for user state management 
import { createSlice } from "@reduxjs/toolkit";

// creating user initial state
export const initialState = {
    user:null,
    isLogin:false,
    status:null,
    token:null
};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user = action.payload;
            state.isLogin = true;
            state.status = "success";
        },
        logout:(state)=>{
            state.user = null;
            state.isLogin = false;
            state.status = "success";
        }
    }
});


// exporting the user reducer actions 
export const {login,logout} =  userSlice.actions;

//  exporting the userslice reducer as default
export default userSlice.reducer;