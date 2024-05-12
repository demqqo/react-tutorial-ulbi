import React from 'react'
import '../styles/postitem.css'
import Mybutton from './UI/button/mybutton'
import MyInput from './UI/input/MyInput.js'

const Postitem = (props) => {
    console.log(props.post)
  return (
    <div className="box">
        <div style={{width:'80%'}}>
    <div className="item">
      <div className="id">{props.post.id}.</div>
        <div className="title">{props.post.title} </div>
       
        </div> <div className="text">{props.post.text}</div>
        </div>
        <div className="btns">
        <Mybutton>Delete</Mybutton>
        <MyInput type="text" placeholder="enter title"/>
            </div>
            
       
      
    </div>
  )
}

export default Postitem
