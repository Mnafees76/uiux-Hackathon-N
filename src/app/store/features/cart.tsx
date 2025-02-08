import { cart } from '@/app/utlis/types';
import { createSlice } from '@reduxjs/toolkit'
import { BsSubtract } from 'react-icons/bs';



// Define the initial state using that type
const initialState: cart[] =[]; 
  


export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   // add to cart functionality
   addtoCart(state,actions){
    let uuid = Math.floor(1000+Math.random()*9000)
    let newObj = {...actions.payload,uuid}
    state.push(newObj);
   },
   // delete product from cart
   delItem(state,{payload}){
    return state.filter((val)=>val.uuid!==payload)
   },
   // addition of item
     addCart(state,action){
      let obj = state.find(
      (val)=> 
        val.id == action.payload.id &&
         val.color == action.payload.color &&
         val.size == action.payload.size
         
      ); 
      
      if (obj){
        ++obj.qty;
        let newstate = state.filter((val)=>val.id !== obj?.id)
        state = [...newstate,obj];
        return;
      } 
     },
     // subtraction of item
     subtractcart(state,action) {
      let obj = state.find(
        (val)=> 
          val.id == action.payload.id &&
           val.color == action.payload.color &&
           val.size == action.payload.size
        );
        if(obj!==undefined){
          if(obj.qty<=1){
            return state . filter ((val)=>val.uuid!== obj?.uuid)
          }
            --obj.qty;
            let newstate= state.filter((val)=> val.uuid==obj?.uuid)
            state=[...newstate,obj]
            return;
         
          
        } 
     } 
  },
})
                         
                        
export const { addtoCart,delItem ,} = cartSlice.actions


export default cartSlice.reducer;