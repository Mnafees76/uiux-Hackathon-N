import { products } from '@/app/utlis/mock';
import { product } from '@/app/utlis/types';
import { createSlice } from '@reduxjs/toolkit'



// Define the initial state using that type
const initialState: product[] = products;
  


export const productSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
  },
})

export const {  } = productSlice.actions


export default productSlice.reducer;