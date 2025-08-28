import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingTodo } from "../redux/todo/action";
import Filter from "../components/todos/Filter";
import CreateTodo from "../components/todos/CreateTodo";
import UpdateTodo from "../components/todos/UpdateTodo";
import DeleteTodo from "../components/todos/DeleteTodo";

export default function Todo() {
  const { todos, error, loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingTodo());
  }, []);

  return (
    <div className="mt-5 container">
      <CreateTodo />

      <hr />

      <Filter />

      {error && <h4 className="mt-5 text-center">{JSON.stringify(error)}</h4>}

      <div className="">
        <div className="row g-3 mt-4">
          {todos &&
            todos.map((todo, index) => (
              <div key={index} className="col-md-4">
                <div className={todo.completed ? "card bg-light" : "card"}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start">
                      {todo.completed ? (
                        <del>{todo.title}</del>
                      ) : (
                        <span>{todo.title}</span>
                      )}
                      <div className="d-flex align-items-center ms-1">

                        <UpdateTodo todo={todo}/>
                        <DeleteTodo todo={todo}/>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
