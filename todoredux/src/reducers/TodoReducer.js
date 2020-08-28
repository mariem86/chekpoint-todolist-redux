import {ADD_TODO,DELETE_TODO, COMPLETE_TODO} from '../actions/ActionType'

const inialestate =[
{id:Math.random(),text:"task1", isComplete:false},
{id:Math.random(),text:'task2', isComplete:false}
]
 const TodoReducer=(state=inialestate,action)=>{
    switch(action.type){
     case ADD_TODO:
         return state.concat(action.payload) 
      case DELETE_TODO:
          return state.filter(todo=>todo.id!==action.payload) 
      case COMPLETE_TODO:
         return state.map(el=>el.id===action.payload ? {...el,isComplete:!el.isComplete}:el)     


         
         default: return state;
    }
   
     
 }
 export default  TodoReducer 

