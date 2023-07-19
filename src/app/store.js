import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice"


const store=configureStore({
reducer:{
   cartInfo:cartReducer
}
})

export default store