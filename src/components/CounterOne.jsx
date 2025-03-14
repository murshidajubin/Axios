import React,{useReducer, useState} from 'react'

// const initialState=0
// const reducer=(state,action)=>{
//     switch(action){
//         case'increment':
//         return state+1
//         case'decrement':
//         return state-1
//         case'reset':
//         return initialState
//         default:
//             return state
//     }
// }

// function CounterOne() {
//    const[count,dispatch]= useReducer(reducer,initialState)
//   return (
//     <div>
//         <div>count-{count}</div>
//       <button onClick={()=>dispatch('increment')}>increment</button>
//       <button onClick={()=>dispatch('decrement')}>decrememt</button>
//       <button onClick={()=>dispatch('reset')}>reset</button>
//     </div>
//   )
// }

// export default CounterOne;

const reducer=(state,action)=>{
  switch(action.type){
    case "increment":
      return {count:state.count+1}
    case "decrement":
      return {count:state.count-1}
    case "reset":
      return {count:0}

      default:
        return state;
  }
}
const CounterOne=()=>{
  const[state,dispatch]=useReducer(reducer,{count:0})

  return(
    <div>
      <h1>count:{state.count}</h1>
      <button onClick={()=>dispatch({type:count+1})}></button>
      <button onClick={()=>dispatch({type:count-1})}></button>
      
    </div>
  )
}