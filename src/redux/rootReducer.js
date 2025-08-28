import { combineReducers } from "redux";
import reducerTodo from "./todo/reducerTodo";

const rootReducer = combineReducers({
    todos:reducerTodo
})

export default rootReducer