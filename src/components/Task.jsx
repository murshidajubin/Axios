import React,{useState} from "react";

function Task() {
  const [state, setState] = useState("")
  const [color, setcolor] = useState("")
  const[script,setScript]=useState("")
  const[item,setItem]=useState([])

  const addItem = () => {
    // if (list.trim() !== "") {
       setcolor([...item, { color: color,description:script }])
        setItem("")
        console.log(item)
    
  }

  return(
    <div>
      <input type="text" placeholder="enter usename" value={state}onChange={(e)=>setState(e.target.value)}  />
      <input type="color" placeholder="select color"value={color}onChange={(e)=>setcolor(e.target.value)} />
      <input type="text"placeholder="Discription"value={script} onChange={(e)=>setScript(e.target.value)} />
      <button> add note</button>
      <button>view notes</button>
    </div>
  )

    // const addItem = () => {
    //     if (list.trim() !== "") {
    //        setcolor([...items, { list: list, color: color,description:script }])
    //         setList("")
    //         console.log(items)
    //     }
      
//   }
//   return(
//     <div>
//       <input type="text" 
//       placeholder="text"
//       onChange={()=>setList(e.target.value)}
//       />
//       <button onClick={()=>}></>
//     </div>
//   )
// }
}
export default Task;