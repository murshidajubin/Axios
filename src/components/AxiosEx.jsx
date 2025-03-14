import React, { useEffect, useState } from "react";
import axios from 'axios'

  function AxiosEx() {
    const [posts,setPosts] = useState([]);
    const [title,setTitle] = useState('');

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      .then(response=>setPosts(response.data))
      .catch(error=>console.error('error fetching posts:',error))
    },[])

    //add new post
    const addPost=()=>{
      axios.post(`https://jsonplaceholder.typicode.com/posts`,{title,body:'sample content',userId:1})
      .then(response=>setPosts(prevPosts=>[response.data,...prevPosts]))
      .catch(error=>console.log('error adding post:',error));
    };

 //delete post

    const deletePost=(id)=>{
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(()=>setPosts(posts.filter(post=>post.id!==id)))
      .catch(error=>console.error('error deleting post:',error));
   };
   return(
     <div>
      <h1>axios example</h1>
      <input      
       type="text"
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
       placeholder="enter post title"
       />
       <button onClick={addPost}>Addpost</button>

       <ul>
         {posts.map(post=>(
           <li key={post.id}>
             {post.title}
             <button onClick={()=>deletePost(post.id)}>delete</button>
           </li>
       ))}
       </ul>
    </div>
   )
  }

export default AxiosEx;