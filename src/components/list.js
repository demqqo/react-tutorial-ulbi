import React, {useState} from 'react'
import Postitem from './postitem'
import MyInput from './UI/input/MyInput'
import '../styles/postitem.css'
const List = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript 1", text: "programing language"},
        {id: 2, title: "Javascript 2", text: "programing language"},
        {id: 3, title: "Javascript 3", text: "programing language"}])
        
   
  return (
    <div>
        
        <div style={{textAlign:'center',fontSize:'48px',fontWeight:'bold'}}>Posts about JS</div>
        <div style={{padding:'20px auto'}}><input placeholder="enter title"/></div>
     {posts.map((post)=><Postitem post={post}/>)}
    
    </div>
  )
}

export default List
