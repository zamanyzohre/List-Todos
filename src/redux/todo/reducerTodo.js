import { GETTODOS,GETERROR,LOADING,ADDTODO,DELETE_TODO,UPDATE_TODO } from './actionType'

const initialState = {
    todos:[],
    error:null,
    loading:true
}

function reducerTodo(state=initialState,action){
    switch(action.type){
        case "GETTODOS":
            return{
                ...state,
                todos: action.payload
            }
        case "FILTERTODO":
            return{
                ...state,
                todos: action.payload
            }
        case "GETERROR":
            return{
                ...state,
                error:action.payload
            }
        case "ADDTODO":
            return{
                ...state,
                todos:[action.payload,...state.todos]
            }
        case "UPDATE_TODO":
            return{
                ...state,
                todos:state.todos.map(todo => todo.id === action.payload.id ? {...todo,completed:action.payload.completed} : todo) 
            }
        case "DELETE_TODO":
            return{
                ...state,
                todos:state.todos.filter(todo =>todo.id !== action.payload.id)
            }
        case "LOADING":
            return{
                ...state,
                loading:action.payload
            }
            default:
                return state
    }
}


export default reducerTodo