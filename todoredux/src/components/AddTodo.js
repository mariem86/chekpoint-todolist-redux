import React,{useState} from 'react'
import {addtodo} from '../actions/Action'
import { connect } from 'react-redux'
//react
 function AddTodo({addtodo}) {
     const [value, setValue] = useState('')
     const HandleChange=(event)=>{
         setValue(event.target.value)
     }
    const HandleAdd=()=>{
     addtodo(
       {text:value,
        id:Math.random(),isComplete:false}
         )
     setValue("")
    }
    return (
        <div className="header">
           <h2 style={{margin:"5px"}}>My To Do List</h2> 
         <input onChange={ HandleChange} value={value} /> 
         <button className="addBtn" onClick={HandleAdd}>ADD</button>  
        </div>
    )
}
//redux
//1
//2
const mapDispatchToProps=dispatch=>{
 return{   addtodo:(payload)=>{dispatch(addtodo(payload))}
}
}
export default connect(null,mapDispatchToProps)(AddTodo)