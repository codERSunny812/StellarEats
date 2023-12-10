import { createSlice } from "@reduxjs/toolkit";

// slice is created
const CartSlice = createSlice({
    // name of slice
    name:"cartSlice",
    // state of slice
    initialState:{
        items:[]
    },
    // reducers function
    reducers:{
        // addItems is the action and its has the reducer function
        addItems:(state,action)=>{
          state.items.push(action.payload);
        },
        removeItems:(state,action)=>{
        state.items.pop();
        },
        clearItems:()=>{
            state.items=[];
        }

    }
});

export const {addItems,removeItems,clearItems}=CartSlice.actions;
export default CartSlice.reducer;