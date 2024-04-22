//  creating an slice for user state management
import { createSlice } from "@reduxjs/toolkit";

// creating user initial state
export const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
      state.status = "success";
    },
    logout: (state) => {
      state.user = null;
      state.isLogin = false;
      state.status = "success";
    },
  },
});

// exporting the user reducer actions
export const { login, logout } = productSlice.actions;

//  exporting the productSlice reducer as default
export default productSlice.reducer;
