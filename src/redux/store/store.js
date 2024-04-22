import { configureStore } from "@reduxjs/toolkit";
import userslice from "../reducer/userslice";
import productsslice from "../reducer/productsslice";
import cartslice from "../reducer/cartslice";

// creating an redux store the state management 
const store = configureStore(
    {
        reducer:{
            user:userslice,
            product:productsslice,
            cart:cartslice
        }
    }
);

export default store;