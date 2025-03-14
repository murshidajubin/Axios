 import React,{createContext,useContext,useState} from "react";

// const UserContext=createContext()

// const ContextExx=()=>{
//     return(
//         <UserContext.Provider value="jhon">
//           <Profile/>
//         </UserContext.Provider>
//     )

// }

// const Profile=()=>{
//     return(
//         <div>
//             <h1>profile page</h1>
//             <UserInfo/>
//         </div>
//     )
// };
// const UserInfo=()=>{
//     const userName=useContext(UserContext);
//     return <h2>username:{userName}</h2>
// }

// export default ContextExx;

const CounterContext=createContext()

const ContextExx=()=>{
    const[count,setCount]=useState(0);

    return(
        <CounterContext.Provider value={{count,setCount}}>
            <Counter/>

        </CounterContext.Provider>
    )
}
const Counter=()=>{
    const{count,setCount}=useContext(CounterContext);

    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>
        </div>
    )
}

export default ContextExx;

const UserContext=createContext()

