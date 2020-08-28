import React from 'react'
import { connect } from 'react-redux'
import {deletetodo,completetodo} from '../actions/Action'

export const ListeTodo = ({todos,deletetodo,completetodo}) => {
    // {text :"todo" , id : "sdsdsd" , isCom : false }
    return (
        <ul className="myUL">
          {todos.map((el,i)=>
          <li className="checked" key={i}>
              <span style={el.isComplete?{textDecoration:"line-through"}:null}>{   el.text  }</span>
              <button className="close" onClick={()=>deletetodo(el.id)}>X</button>
              <button className= "comp" onClick={()=> completetodo(el.id)}>complete</button>

          </li>
            )}  
        </ul>
    )
}

const mapStateToProps = (state) => {
   return {todos:state} 
}

const mapDispatchToProps=dispatch=>{
    return{    deletetodo :(payload)=>{dispatch( deletetodo (payload))},
        completetodo:(payload)=>{dispatch(  completetodo (payload))}
        
}    
   
   }


export default connect(mapStateToProps, mapDispatchToProps)(ListeTodo)
