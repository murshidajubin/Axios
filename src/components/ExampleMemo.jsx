import React,{useMemo, useState} from "react";

const ExampleMemo=()=>{
    const[count,setCount]=useState(0)
    const[number,setNumber]=useState(5)
    
    const memoizeValue=useMemo(()=>{
        console.log("calculating...");
        return number*2
        
    },[number])
    return(
        <div>
            <h1>count:{count}</h1>
            <h1>calculating result:{memoizeValue}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    )
}
export default ExampleMemo;