import { GETTODOS, GETERROR, LOADING, FILTERTODO, ADDTODO, DELETE_TODO, UPDATE_TODO } from "./actionType";

export function get_todos(todos) {
  return {
    type: GETTODOS,
    payload: todos,
  };
}
export function filter_todos(todos) {
  return {
    type: FILTERTODO,
    payload: todos,
  };
}
export function add_todos(todo) {
  return {
    type: ADDTODO,
    payload: todo,
  };
}
export function update_todos(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}
export function delete_todos(todo) {
  return {
    type: DELETE_TODO,
    payload: todo
  };
}
export function get_error(err) {
  return {
    type: GETERROR,
    payload: err,
  };
}
export function get_loading(status) {
  return {
    type: LOADING,
    payload: status,
  };
}

export function fetchingTodo() {
  return async function (dispatch) {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();

      dispatch(get_todos(data));
      dispatch(get_error(null));
      dispatch(get_loading(false));
    } catch (err) {
      dispatch(get_todos([]));
      dispatch(get_loading(false));
      dispatch(get_error(err.message));
    }
  };
}

export function filterTodo(count) {
  return async function (dispatch) {
    try {
      dispatch(get_loading(true));
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=${count}`
      );
      const data = await res.json();

      dispatch(filter_todos(data));
      dispatch(get_error(null));
      dispatch(get_loading(false));
    } catch (err) {
      dispatch(filter_todos([]));
      dispatch(get_loading(false));
      dispatch(get_error(err.message));
    }
  };
}

export function postFetchingTodo(title) {
  return async function (dispatch) {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
          userId: 1,
          title: title,
          completed: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      dispatch(add_todos(data));
      dispatch(get_error(null));
      dispatch(get_loading(false));
    } catch (err) {
      dispatch(add_todos([]));
      dispatch(get_loading(false));
      dispatch(get_error(err.message));
    }
  };
}

export function putFetchingTodo(todo) {
  return async function (dispatch) {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,{
          method: "PUT",
          body: JSON.stringify({
            userId: 1,
            title: todo.title,
            completed:!todo.completed,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await res.json();
      
      dispatch(update_todos(data));
      dispatch(get_error(null));
      dispatch(get_loading(false));
    } catch (err) {
      dispatch(update_todos([]));
      dispatch(get_loading(false));
      dispatch(get_error(err.message));
    }
  };
}

export function deleteFetchingTodo(todo) {
  return async function (dispatch) {
    try {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,{
          method: "DELETE"
        }
      );
      
      dispatch(delete_todos(todo));
      dispatch(get_error(null));
    } catch (err) {
      dispatch(get_error(err.message));
    }
  };
}
