import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items.push({...action.payload,quantity:1}) ;
    },
    removeItems: (state, action) => {
      const items = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = items;
    },
    incrementQuantity: (state, action) => {
      const quantity = state.items.find((item) => item.id === action.payload.id);
      console.log(quantity)
      quantity.quantity++;
    },
decrementQuantity:(state,action)=>{
const itemQuantity=state.items.find((item)=>item.id ===action.payload.id)
console.log(itemQuantity)
if(itemQuantity.quantity===1){
  const removeItem = state.items.filter(
    (item) => item.id !== action.payload.id
  );
  state.items = removeItem;
}else{
  itemQuantity.quantity--;
}
}
  },
});

export const { addItems, removeItems,incrementQuantity,decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;

export const selectedItems = (state) => state.cartInfo.items;
