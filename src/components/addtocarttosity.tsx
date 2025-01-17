"use client"
import { addtoCart } from '@/app/store/features/cart';
import { useAppDispatch } from '@/app/store/hooks';

import { Bounce, ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css";
export default function Addtocarttosity({cartItem}:any){
    const dispatch =useAppDispatch();    
    const notify = () =>
    toast.success('Product added Successfully!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

  

    return(
      <>
    <main  onClick={() => dispatch(addtoCart(cartItem))} >
         <div>
       
         <div className=" ml-7">
         <button className=" mt-4 text-center px-3  py-2 text-xs text-[#000000] outline outline-offset-1 outline-1 rounded-sm ml-3 active:hover:bg-black active:text-white" onClick={notify}> Add To Cart</button>  
            </div>
         
         
         
         </div>
        
    </main>
     <ToastContainer
     position="top-left"
     autoClose={3000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick={false}
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
     transition={Bounce}
     />
     </>
    )
}