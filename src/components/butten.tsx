  
 import React,{useState} from "react"
export default function counter(){

     const [count,setcount]= useState(0);

     const Increment =()=>{
        setcount(count+1);


        }

        
        const Decrement =()=>{
            setcount(count-1);
     };
    return(
        <div>
            <h1>Number : - {count}</h1>

            <button onClick={Increment}>Increment </button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}