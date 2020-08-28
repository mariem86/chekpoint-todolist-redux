import {ADD_TODO,DELETE_TODO,COMPLETE_TODO} from './ActionType'
export function addtodo (payload){
return {
    type:ADD_TODO,payload
}
}
export function deletetodo (payload){
    return {
        type:DELETE_TODO,payload
    }
    }
    export function completetodo (payload){
        return {
            type:COMPLETE_TODO,payload
        }
        }